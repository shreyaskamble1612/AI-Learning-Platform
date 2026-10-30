# ADR 0002: Two-Phase Course Generation (Outline First, Lazy Lessons)

## Status
Accepted

## Context
Generating a 24-lesson course (6 modules × 4 lessons) with comprehensive content, quizzes, and video scripts in a single prompt would take minutes, consume over 80,000 output tokens, risk hitting model context limits, and cause a dreadful user experience (staring at a loading screen).

## Decision
We implement a **two-phase generation strategy**:
1. **Phase 1 (Sync-ish Outline Generation):** The user prompt is analyzed and fed to a strong LLM tier to generate the course outline (modules, lessons, objectives, time estimates) within 20 seconds. This is streamed to the UI via Server-Sent Events (SSE).
2. **Phase 2 (Lazy / Prefetch Lesson Generation):**
   - Eagerly generate Module 1, Lesson 1 (content, script, quiz) so the learner can start reading within 40 seconds.
   - Remaining lessons are generated lazily as the user advances through the curriculum (prefetching N+1 lessons).

## Consequences
- **Positive:** Sub-20 second time-to-first-paint, dramatic reduction in wasted AI generation costs for unviewed lessons, isolated failure domains (if lesson 3 fails, the course outline and lesson 1 remain intact).
- **Negative:** Requires background queue coordination and client-side handling of "generating" lesson states.

