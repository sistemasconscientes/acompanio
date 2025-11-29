# Acompaño - Mood Tracking MVP

## What is this?
Daily mood tracking app for neurodivergent people with Pattern Detective feature.

## Target User
Neurodivergent women 26-40 in LATAM with high energy fluctuation.

## MVP Scope - Phase 1
1. Check-in screen: Energy (1-5) + Emotion (3 emojis)
2. Data persistence (AsyncStorage)
3. History view
4. Basic pattern: Weekly average

## Tech Stack
- React Native + Expo SDK 52
- TypeScript strict mode
- React Native Paper (UI)
- Zustand (state)
- AsyncStorage (persistence)
- Expo Router (navigation)
- CursorAI Pro (lastest version)
- Claude Code Desktop and CLI

## Design Principles
- Dark mode default
- Minimal animations (sensory sensitivity)
- <30 seconds to complete check-in
- No guilt-based language
- Large touch targets (48px min)

## Not Building Yet
- Backend/Supabase
- AI chatbot
- Cycle tracking
- Complex ML patterns

## Workflow Rules

### Git Workflow (Claude in container, me on Mac local):

**Claude CAN:**
- Make commits and push to feature branches (claude/*)
- Use commit tags: `[AI]` for new implementations, `[human-fix-requested]` for fixes I ask for
- Provide human-readable summaries of changes after each commit

**Claude CANNOT:**
- NEVER commit or push to `main` branch
- NEVER commit or push to `dev` branch
- These branches are protected - I handle PRs and merges

**My workflow:**
1. Claude commits to feature branch with proper tag
2. I do `git pull` on my Mac to review
3. I test in Expo Go and Cursor
4. If changes needed, I request fixes → Claude makes `[human-fix-requested]` commit
5. When satisfied, I create PR and merge to dev/main myself

**Commit message format:**
- `[AI] Add feature X` - Initial implementation by Claude
- `[human-fix-requested] Fix issue Y` - Changes I requested