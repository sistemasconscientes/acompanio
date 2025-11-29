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

### Since we work in different environments (Claude in container, me on Mac local):

**Option 1 - Code Review Flow (preferred):**
1. Claude commits and pushes changes to the branch
2. Claude provides a human-readable summary of what changed
3. I do `git pull` to see the changes on my Mac
4. I review in Cursor, test in Expo Go
5. If I need changes, I request them and Claude makes another commit

**Option 2 - Manual Implementation:**
1. Claude shows me the complete code in chat
2. I implement it myself on my Mac
3. I commit when ready

**Always:**
- Summarize changes in human language, not just code diffs
- Explain the "why" behind decisions
- I'm the final reviewer, but Claude can commit directly to speed up iteration