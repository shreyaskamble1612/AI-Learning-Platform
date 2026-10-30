# AI-Powered Personalized Learning Platform — System Design

**Author:** @shreyas  
**Date:** October 30, 2026  
**Document Version:** 1.0  

---

## 1. Overview & Key Decisions

A prompt-to-course platform: a learner enters what they want to learn, and the system generates a structured course, lessons, narrated video lectures, quizzes, and an interactive AI tutor, then adapts dynamically to their progress.

### 1.1 Goals
- **Prompt to Course in <60s:** Turn a natural-language prompt into a complete, saved, revisitable course in under 60 seconds (outline first, lessons streamed in after).
- **6 Teaching Styles:** Support six styles (`Teacher`, `Animated`, `Storytelling`, `Practical`, `Simple`, `Professional`) by modifying prompts and media templates, without branching code paths.
- **Asynchronous Lesson Video:** Deliver a lesson video for every lesson, generated asynchronously, retryable, and never blocking learner reading progress.
- **Adaptive Progression:** Track progress and quiz performance, recommending next lessons or targeted revisions.

### 1.2 Non-Goals for v1
- Fully AI-generated cinematic video (v1 uses narrated slides + generated images + FFmpeg).
- Live interactive AI teaching rooms, collaborative classrooms, native mobile apps, offline mode.
- Multi-tenant / B2B features (schools, teacher dashboards, LMS integrations).

### 1.3 Key Architectural Decisions

| Decision | Choice | Why | Revisit When |
|---|---|---|---|
| **Architecture Style** | Modular Monolith + Worker | One deploy, simple debugging, clean module boundaries to split later | Video load needs independent scaling |
| **Backend** | Python 3.12, FastAPI | Async, typed, richest AI/ML library ecosystem | Never likely |
| **Database** | PostgreSQL 16 + JSONB | Relational integrity for structure, flexible JSONB for AI outputs | Analytics load grows |
| **Job Queue** | Redis + ARQ (or Celery) | Simple async jobs with retries and queue separation | Workflows become multi-branch (Temporal) |
| **Course Generation** | Two-phase: outline first, then lessons in parallel | Fast first paint (<20s), cheaper retries | Never |
| **Video v1** | Narrated slides (TTS + images + FFmpeg) | Cheap, deterministic, 1–2 min render per lesson | Budget allows text-to-video clips |
| **Real-time Updates** | Server-Sent Events (SSE) | One-way progress streaming, simpler than WebSockets | Tutor needs bidirectional audio |
| **Auth** | Managed Provider (Clerk or Firebase Auth) + JWT API verification | Avoid hand-rolling password/token security | Enterprise SSO needed |
| **Media Storage** | S3-compatible (S3 / Cloudflare R2) + CDN | Cheap, scalable video delivery | Never |

---

## 2. Requirements & Capacity

### 2.1 Functional Requirements (v1 to v3)
- **F1 (Must, v1):** Sign up, log in, reset password, edit profile via auth provider.
- **F2 (Must, v1):** Prompt form: topic, level, goals, teaching style, language, duration.
- **F3 (Must, v1):** Course outline generation (modules, lessons, objectives, time estimates).
- **F4 (Must, v1):** Lesson content generation (explanation, examples, summary, notes).
- **F5 (Must, v1):** Lesson quiz generation (MCQ, true/false, fill-in-the-blank, short answer) with instant feedback.
- **F6 (Must, v1):** Progress tracking (lesson completion, quiz scores, time spent, streaks).
- **F7 (Must, v1):** Course history, revisit, bookmark lessons.
- **F8 (Must, v2):** Lesson video: narrated slides with subtitles (.vtt).
- **F9 (Should, v2):** In-lesson AI tutor chat scoped to current lesson with streaming responses.
- **F10 (Should, v2):** Personalized next-lesson and revision recommendations.
- **F11 (Should, v2):** Regenerate lesson in a different style or simpler level.
- **F12 (Could, v3):** Adaptive difficulty dynamically tuned by quiz results.
- **F13 (Could, v3):** Voice input, multilingual narration, completion certificates.

### 2.2 Non-Functional Requirements & Targets
- **Outline Latency:** p95 < 20 seconds.
- **First Lesson Readable:** p95 < 40 seconds after initial prompt.
- **Video Render:** p95 < 5 minutes per lesson (background job).
- **API Latency (non-AI):** p95 < 300 ms.
- **Availability:** 99.5% for web app.
- **Durability:** No generated content lost; persist all AI outputs before acknowledging.
- **Security:** OWASP Top 10 covered, per-user row scoping, no API keys on client.

---

## 3. High-Level Architecture & 5 Layers

```
Browser: React / Next.js (Hosted on Vercel)
   │                       │                      │
   │ (Auth / JWT)          │ (REST + SSE)         │ (Signed Video URLs)
   ▼                       ▼                      ▼
Auth Provider ────► FastAPI Service ◄─────► Cloudflare R2 / S3 CDN
(Clerk / Firebase)   (Token check, CRUD,
                      Quotas, Tutor SSE)
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
        PostgreSQL 16                  Redis
     (Relational data +          (Job queues, rate
       JSONB AI payloads)         limits, SSE pub/sub)
                                         │
             ┌───────────────────────────┴───────────────────────────┐
             ▼                                                       ▼
        Text Worker                                             Video Worker
 (Prompt analysis, outline,                               (Scene visuals, TTS,
  lesson content, quiz, grading)                           subtitles, FFmpeg, upload)
             │                                                       │
             └───────────────────────────┬───────────────────────────┘
                                         ▼
                               External AI Services
                         (LLM, TTS, Image Gen APIs)
```

---

## 4. PostgreSQL Data Model

```sql
-- Identity
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_uid TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email CITEXT UNIQUE NOT NULL,
    preferred_style TEXT DEFAULT 'teacher',
    preferred_language TEXT DEFAULT 'en',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TYPE gen_status AS ENUM ('pending','generating','ready','failed');

-- Courses
CREATE TABLE courses (
    course_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    original_prompt TEXT NOT NULL,
    params JSONB NOT NULL,
    learning_level TEXT,
    teaching_style TEXT,
    status gen_status NOT NULL DEFAULT 'pending',
    est_minutes INT,
    is_archived BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_courses_user ON courses (user_id, created_at DESC);

-- Modules
CREATE TABLE modules (
    module_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES courses ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    seq INT NOT NULL,
    UNIQUE (course_id, seq)
);

-- Lessons
CREATE TABLE lessons (
    lesson_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    module_id UUID NOT NULL REFERENCES modules ON DELETE CASCADE,
    title TEXT NOT NULL,
    objective TEXT,
    seq INT NOT NULL,
    est_minutes INT,
    content JSONB,
    script JSONB,
    content_status gen_status NOT NULL DEFAULT 'pending',
    video_status gen_status NOT NULL DEFAULT 'pending',
    current_video_id UUID,
    prompt_version TEXT,
    UNIQUE (module_id, seq)
);

-- Video Assets
CREATE TABLE video_assets (
    video_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID NOT NULL REFERENCES lessons ON DELETE CASCADE,
    storage_key TEXT NOT NULL,
    subtitle_key TEXT,
    thumbnail_key TEXT,
    duration_sec INT,
    style TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Quiz Questions & Attempts
CREATE TABLE quiz_questions (
    question_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID NOT NULL REFERENCES lessons ON DELETE CASCADE,
    qtype TEXT NOT NULL CHECK (qtype IN ('mcq','true_false','fill_blank','short')),
    question TEXT NOT NULL,
    options JSONB,
    correct_answer JSONB NOT NULL,
    explanation TEXT,
    difficulty SMALLINT DEFAULT 2,
    seq INT NOT NULL
);

CREATE TABLE quiz_attempts (
    attempt_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES lessons ON DELETE CASCADE,
    score NUMERIC(5,2) NOT NULL,
    answers JSONB NOT NULL,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_attempts_user_lesson ON quiz_attempts (user_id, lesson_id, submitted_at DESC);

-- Progress & Bookmarks
CREATE TABLE progress (
    user_id UUID NOT NULL REFERENCES users ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES lessons ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started','in_progress','completed')),
    watched_sec INT DEFAULT 0,
    last_position_sec INT DEFAULT 0,
    completed_at TIMESTAMPTZ,
    PRIMARY KEY (user_id, lesson_id)
);

CREATE TABLE bookmarks (
    user_id UUID REFERENCES users ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (user_id, lesson_id)
);

-- AI Tutor
CREATE TABLE tutor_threads (
    thread_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tutor_messages (
    message_id BIGSERIAL PRIMARY KEY,
    thread_id UUID NOT NULL REFERENCES tutor_threads ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('user','assistant')),
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Background Jobs & Cost Tracking
CREATE TABLE generation_jobs (
    job_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kind TEXT NOT NULL, -- outline | lesson | quiz | video
    target_id UUID NOT NULL,
    user_id UUID NOT NULL REFERENCES users,
    status TEXT NOT NULL DEFAULT 'queued',
    stage TEXT, -- script | tts | images | assemble
    attempts INT DEFAULT 0,
    error TEXT,
    cost_cents NUMERIC(8,3),
    created_at TIMESTAMPTZ DEFAULT now(),
    finished_at TIMESTAMPTZ
);
CREATE INDEX idx_jobs_target ON generation_jobs (target_id, kind);
CREATE INDEX idx_jobs_status ON generation_jobs (status, created_at);

-- Usage Quotas
CREATE TABLE usage_quota (
    user_id UUID REFERENCES users ON DELETE CASCADE,
    day DATE,
    courses_created INT DEFAULT 0,
    lessons_generated INT DEFAULT 0,
    videos_rendered INT DEFAULT 0,
    tutor_messages INT DEFAULT 0,
    PRIMARY KEY (user_id, day)
);
```

---

## 5. API Endpoints

- **Auth:**
  - `GET /api/v1/me` -> Profile of current signed-in user (auto-created on first login)
  - `PATCH /api/v1/me` -> Update profile, style, language preferences
  - `DELETE /api/v1/me` -> Cascade delete account and data
- **Courses:**
  - `POST /api/v1/courses` -> Enqueue course generation (202 Accepted, returns `{course_id, job_id, events_url}`)
  - `GET /api/v1/courses` -> List user courses with completion percentages
  - `GET /api/v1/courses/{id}` -> Course tree with modules, lessons, and statuses
  - `DELETE /api/v1/courses/{id}` -> Archive or delete course
  - `GET /api/v1/courses/{id}/events` -> SSE stream: `outline_ready`, `lesson_ready`, `video_progress`, `video_ready`, `job_failed`
- **Lessons:**
  - `GET /api/v1/lessons/{id}` -> Content, quiz metadata, video URL, progress
  - `POST /api/v1/lessons/{id}/generate` -> Lazy generation for upcoming lesson
  - `POST /api/v1/lessons/{id}/regenerate` -> Regenerate lesson in different style or level
- **Video:**
  - `POST /api/v1/lessons/{id}/video` -> Start or retry video render job
  - `GET /api/v1/lessons/{id}/video` -> Signed playback URL and WebVTT subtitle URL
- **Quiz:**
  - `GET /api/v1/lessons/{id}/quiz` -> Questions without answers
  - `POST /api/v1/lessons/{id}/quiz/attempts` -> Submit answers, graded in code (MCQ/TF/fill) or LLM (short answer)
- **Progress:**
  - `PUT /api/v1/lessons/{id}/progress` -> Update watch position, mark complete at 90%
  - `GET /api/v1/me/dashboard` -> Courses, streaks, scores, time learned
  - `GET /api/v1/me/recommendations` -> Next lesson or targeted revision suggestions
  - `PUT / DELETE /api/v1/lessons/{id}/bookmark` -> Toggle bookmark
- **AI Tutor:**
  - `POST /api/v1/lessons/{id}/tutor` -> Stream tutor answer over SSE, scoped to current lesson
- **Jobs & Ops:**
  - `GET /api/v1/jobs/{id}` -> Poll status if SSE drops
  - `GET /healthz` -> Health and liveness check

---

## 6. AI Generation Steps & 6 Teaching Styles

### Generation Pipeline
1. **Prompt Analysis (Fast model tier):** Extracts `{topic, level, goals, style, language, duration, constraints}`.
2. **Outline Generation (Strong model tier):** Generates structured modules, lessons, objectives, and time estimates.
3. **Lesson Content (Strong tier):** Eagerly generates Module 1 Lesson 1; lazily prefetches remaining lessons.
4. **Video Script (Strong tier):** Ordered scenes with narration text, slide visual specs, and durations.
5. **Quiz Generation (Fast tier):** 5-8 questions with distractors and explanations.
6. **Short-Answer Grading (Fast tier):** Graded against stored rubric and correct answers.
7. **AI Tutor (Strong tier):** Lesson context + last 10 messages + optional quiz mistakes, streamed over SSE.
8. **Adaptive Recommendation:** Rules-first engine, LLM-enhanced explanation.

### Teaching Styles
- **Teacher:** Step-by-step, explicit definitions, comprehension checks. Slides with bullet points and presenter voice.
- **Animated:** Short punchy sentences, visual metaphors, 1 idea per scene. Image-heavy scenes with kinetic motion.
- **Storytelling:** Opens with a real-world scenario; introduces concepts organically as narrative unfolds.
- **Practical:** Code / experiment / problem first, deep explanations after. Screen-style code slides.
- **Simple:** Plain everyday vocabulary, analogies, zero unexplained jargon. Minimalist typography slides.
- **Professional:** Rigorous technical terminology, structured academic depth, formal citation style.

---

## 7. Frontend Architecture (React / Next.js)

- **Routing:**
  - `/` -> Landing page
  - `/signup`, `/login` -> Auth provider UI
  - `/dashboard` -> Active courses, streak tracker, continue-learning shortcuts
  - `/create` -> Prompt wizard with live preview
  - `/courses/:id/building` -> Real-time course generation stream
  - `/courses/:id` -> Course module accordion & progress overview
  - `/courses/:id/lessons/:lid` -> Video player, markdown notes, tutor drawer, bookmark button
  - `/lessons/:lid/quiz` -> Mobile-friendly interactive quiz cards & review
  - `/progress` -> Visual charts of scores, weak spots, recommendations
  - `/settings` -> User preferences (teaching style, language, account management)
- **Features Layout:**
  `features/auth`, `features/courses`, `features/lessons`, `features/quiz`, `features/tutor`, `features/progress`, `features/dashboard`

---

## 8. Delivery Roadmap

- **Week 1:** Monorepo setup, CI/CD, Docker Compose (Postgres, Redis, MinIO), Auth integration, DB migrations, Landing page.
- **Weeks 2–3:** Prompt wizard, outline generation with schema validation, course and lesson viewer pages, SSE progress.
- **Week 4:** Lesson content generation (eager first lesson, lazy prefetch), notes viewer, quiz generation & auto-grading, progress tracking.
- **Week 5:** Dashboard, bookmarks, course history, quota limits, error handling & lesson regeneration.
- **Weeks 6–8:** Video pipeline: script generation, TTS synthesis, programmatic slide rendering, FFmpeg assembly, WebVTT subtitles, signed playback.
- **Weeks 9–10:** Lesson-scoped AI tutor, recommendation rules engine, self-check pass, learner feedback controls.
- **Weeks 11–12:** Load testing (k6/Locust), security hardening, OpenTelemetry observability, cost telemetry dashboard, public launch.

