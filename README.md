# Dot

Dot is a note-taking system designed to help ideas connect, not just accumulate.

Instead of folders, tags, or rigid hierarchies, Dot treats notes as points in a shared conceptual space. Notes can be linked, clustered, revisited, and reinterpreted over time, with AI acting as an assistant for reflection and discovery, not as a replacement for thinking.

Dot is intentionally structure-light but meaning-heavy.

## What problem Dot is solving
Most note apps optimize for storage:
- capture everything
- sort it later
- forget it anyway

Dot optimizes for continuity of thought:
- how ideas relate
- how themes emerge
- how past notes remain alive and useful

The goal is not “more notes,” but better thinking over time.

## Core principles
- Notes are atomic
Each note represents a single idea, observation, or thought.
- Structure emerges, it isn’t enforced
Connections are created intentionally or discovered later.
- AI assists, it does not decide
AI helps surface relationships, summaries, and patterns — the user stays in control.
- Visualization is a lens, not a database
Graphs help explore ideas; they do not dictate storage.

## Stack
### Frontend
- Next.js
- React + TS
- D3.js

### Backend
- Next.js API routes (server-only)

### Core logic
- `lib/services`: application logic
- `lib/ai`: AI helpers and prompts
- `lib/jobs`: background processing

### DB
- PostgreSQL
- Prisma ORM

### Auth
- Auth.js (NextAuth)
