# Local Development Runbook

This guide describes how to run and verify the local development environment for the AI-Powered Personalized Learning Platform.

---

## 1. Prerequisites

- **Docker Desktop** (with Docker Compose v2+)
- **Python 3.12+**
- **Node.js 20+** and **npm**
- **FFmpeg** (installed locally if testing video assembly outside of Docker)

---

## 2. Infrastructure Services (PostgreSQL, Redis, MinIO)

Start the local storage and queue services using Docker Compose:

```bash
docker compose -f infra/docker-compose.yml up -d
```

Verify that all services are healthy:
- **PostgreSQL 16**: Port `5432` (`localhost:5432`)
- **Redis 7**: Port `6379` (`localhost:6379`)
- **MinIO S3 API**: Port `9000` (`localhost:9000`)
- **MinIO Console**: Port `9001` (`http://localhost:9001` - user: `minioadmin`, pass: `minioadmin`)

To stop the services:
```bash
docker compose -f infra/docker-compose.yml down
```

---

## 3. Backend (FastAPI & Background Worker) Setup

### 3.1 Environment Configuration
Copy the environment template:
```bash
cp .env.example .env
```

### 3.2 Virtual Environment & Dependencies
```bash
cd apps/api
python -m venv .venv

# On Windows (PowerShell):
.venv\Scripts\Activate.ps1

# On Linux/macOS:
source .venv/bin/activate

pip install --upgrade pip
pip install -r requirements.txt
```

### 3.3 Database Migrations
Run database migrations using Alembic:
```bash
alembic upgrade head
```

---

## 4. Frontend (Next.js / React) Setup

### 4.1 Install Dependencies
```bash
cd apps/web
npm install
```

### 4.2 Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the web application.

---

## 5. Verification Commands

Run code quality and test checks:

```bash
# Backend linting & type checks
ruff check apps/api
mypy apps/api/app

# Frontend linting & type checks
cd apps/web
npm run lint
npm run type-check
```

