# ADR 0001: Modular Monolith with Background Worker

## Status
Accepted

## Context
The AI-Powered Personalized Learning Platform requires rapid development with a small team (1–3 developers) while supporting heavy background tasks (LLM streaming, audio synthesis, and FFmpeg video assembly). A microservices architecture would introduce excessive operational overhead (service discovery, distributed transactions, contract testing), while a pure single-process monolith would block the web tier during CPU-heavy video rendering.

## Decision
We adopt a **modular monolith** with two distinct process types running from a single FastAPI codebase:
1. **Web API Process:** Handles HTTP requests, JWT auth verification, CRUD operations, SSE streaming, and enqueues jobs to Redis.
2. **Background Worker Process:** Consumes jobs from Redis queues (`jobs_text` and `jobs_video`), interacts with external AI APIs, renders video assets via FFmpeg, and updates PostgreSQL.

Each domain (`courses`, `lessons`, `quiz`, `progress`, `tutor`, `media`, `jobs`, `quota`, `ai`) has its own encapsulated data models, schemas, and service classes. Inter-module communication occurs strictly via service calls, enabling any module to be separated into an independent microservice in the future if scale warrants.

## Consequences
- **Positive:** Single deployment artifact, simplified local development with Docker Compose, clear module boundaries, fast iteration speed.
- **Negative:** Video processing and API share the same code repository; requires strict CI linting and dependency discipline to prevent circular imports.

