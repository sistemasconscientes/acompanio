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

---

## AI Tools Strategy

### Daily Workflow:

**Morning Planning - Claude AI Assistant (Opus via web/app):**
- High-level feature planning
- Architecture decisions
- Pomodoro structure for the day
- Break down large features into tasks
- Output: Detailed plan/prompt to share with Claude Code

**Implementation - Claude Code CLI:**
- Receive plan from Claude AI Assistant
- Implement features following the plan
- Commit with `[AI]` tag
- Handle medium-sized features

**Quick Fixes - Claude Code Desktop:**
- Small features and bug fixes
- Visual debugging with file diffs
- Interactive iterations
- Commit with appropriate tags

**Manual Review/Fixes - Cursor AI:**
- Manual code corrections while developing
- Real-time pair programming
- Agent reviewer for code quality
- Quick inline edits

### Tool Selection Guide:

```
Morning:
┌─────────────────────────────────────────┐
│ Claude AI Assistant (Opus)              │
│ "Plan today: History view + charts"    │
│ → Generates detailed implementation    │
│   plan with architecture decisions     │
└─────────────────────────────────────────┘
                    ↓
              Share prompt
                    ↓
Implementation:
┌─────────────────────────────────────────┐
│ Claude Code CLI                         │
│ Paste plan: "Implement history view    │
│ following this plan: [paste]"          │
│ → Fast implementation                   │
│ → Commits with [AI] tag                 │
└─────────────────────────────────────────┘
                    ↓
           git pull on Mac
                    ↓
Testing & Fixes:
┌─────────────────────────────────────────┐
│ Me: Test in Expo Go                     │
│ If bugs: Claude Code Desktop for fixes │
│ If small tweaks: Cursor AI directly     │
└─────────────────────────────────────────┘
```

### When to Use What:

**Claude AI Assistant (Opus) - Planning:**
- ✅ Start of day planning
- ✅ Complex feature architecture
- ✅ Technical decision analysis
- ✅ Breaking down large features
- ❌ No code execution (planning only)

**Claude Code CLI - Implementation:**
- ✅ Implement plans from Claude AI
- ✅ Medium features (3-10 files)
- ✅ When already in terminal workflow
- ✅ Scripting and automation
- ⚡ Fast for following clear plans

**Claude Code Desktop - Fixes:**
- ✅ Small features (1-3 files)
- ✅ Bug fixes with visual debugging
- ✅ Interactive problem solving
- ✅ When you need to see diffs visually

**Cursor AI - Manual Work:**
- ✅ Real-time coding assistance
- ✅ Quick inline corrections
- ✅ Code review with agents
- ✅ Manual refinements while testing