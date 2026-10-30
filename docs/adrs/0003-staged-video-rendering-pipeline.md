# ADR 0003: Staged Video Rendering Pipeline

## Status
Accepted

## Context
Cinematic text-to-video AI generation is too expensive, slow, and non-deterministic for technical education. Conversely, static PDFs or pure text miss the visual engagement learners expect. Furthermore, video rendering takes 1–2 minutes per lesson and must never block learners from reading text content or attempting quizzes.

## Decision
For v1, lesson video will be assembled as **narrated educational slides**:
1. **Scene Script:** An LLM generates ordered scenes with narration scripts, visual layout instructions (bullet points, code snippets, diagrams, or scene art prompts), and target scene durations.
2. **Audio Synthesis:** Text-To-Speech (TTS) synthesizes audio tracks per scene with timestamp markers.
3. **Slide Graphics:** High-resolution slide graphics are generated programmatically (Pillow / HTML-to-image) or augmented with image generation APIs.
4. **FFmpeg Assembly:** FFmpeg stitches audio and slides into a standardized 720p H.264 MP4 container and generates synchronized WebVTT subtitles.
5. **Decoupled Execution:** Video rendering is assigned to an isolated worker queue (`jobs_video`). The lesson text and quiz remain readable and fully interactive while the video renders in the background.

## Consequences
- **Positive:** Deterministic quality, affordable cost (<$0.15/video vs >$5/min for generative video models), easy subtitle extraction, fault tolerance (failed video render does not break course or text content).
- **Negative:** Video workers require FFmpeg installed in container images and dedicated compute (2+ vCPU).

