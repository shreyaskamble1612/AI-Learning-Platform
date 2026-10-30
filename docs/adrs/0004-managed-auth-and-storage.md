# ADR 0004: Managed Authentication and S3-Compatible Storage

## Status
Accepted

## Context
Building custom authentication (password hashing, reset emails, session rotation, OAuth providers, MFA) and custom video hosting introduces high security risk and infrastructure overhead for a lean team.

## Decision
1. **Managed Auth:** Delegate user credentials, password management, OAuth logins, and session lifecycles to a managed provider (Clerk or Firebase Auth). The FastAPI backend verifies the provider's signed JWT tokens and maps the `auth_uid` to our internal `users.user_id`. All database queries are filtered by this `user_id`.
2. **Object Storage + CDN:** Store all generated video files, slide images, thumbnails, and WebVTT subtitles in S3-compatible object storage (Cloudflare R2 or AWS S3).
   - In production, Cloudflare R2 is preferred due to zero egress fees for large video streams.
   - For local development, an identical S3 API interface is provided via a MinIO container in Docker Compose.
   - All client media access uses short-lived signed URLs (1 hour expiration) after verifying ownership or course access.

## Consequences
- **Positive:** Zero password liability, automatic compliance with security standards, seamless local testing with MinIO, low-latency worldwide video caching via CDN.
- **Negative:** External dependency on managed auth uptime and latency.

