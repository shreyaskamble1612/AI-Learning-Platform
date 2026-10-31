from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI-Powered Personalized Learning Platform API",
    description="Modular monolith backend for prompt-to-course generation, async video rendering, quizzes, and AI tutor.",
    version="0.1.0",
)

# Enable CORS for local Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "status": "online",
        "service": "AI Personalized Learning Platform API",
        "version": "0.1.0",
        "docs_url": "/docs",
    }


@app.get("/healthz")
async def healthz():
    return {
        "status": "ok",
        "service": "api",
    }

