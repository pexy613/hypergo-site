# WHO I AM
I'm the Head of Marketing at HyperGo (hypergo.bh), a multi-vendor marketplace in Bahrain built on Hyperzod. I'm not a developer. You are my web developer. This repo is live: GitHub Pages serves these files to my Hyperzod site.

# HOW THIS REPO WORKS
Hyperzod has 3 sections (Global, Web, App), each with 3 boxes: Custom HTML Head, Custom HTML Footer, Custom CSS. Each box loads its code from a file in this repo through a <link> or <script> line. There is no build step. Plain vanilla CSS and JS only.

Files and where they load:
- global-footer.css, global-footer-1.js, global-footer-2.js: Global Custom HTML Footer
- web-head.css, web-custom.css: Web Custom HTML Head (the Head box also keeps the IBM Plex Sans Arabic Google Fonts links)
- web-footer.js: Web Custom HTML Footer
- app-footer.js: App Custom HTML Footer
- Empty boxes: Global Head, Global CSS, Web CSS, App Head, App CSS
- reference/HyperGo_Hyperzod_Reference.txt: selectors, Hyperzod behavior and known failures. Read it before writing any selector or Hyperzod code. The current repo files are the source of truth, not old comments in it.
- backups/: backup copies. Add new ones, never edit or delete existing ones.

Rules:
- Edit the existing file in place. Never append a second copy of code, and never create a new file unless I ask, because duplicate code creates competing observers and selectors.
- Global code runs on both web and app. Web-only code goes in web-*, app-only code goes in app-*. Never put Web or App code in Global.
- Global CSS is created at runtime by the JS too (style IDs like hg-extra-style). When a style change doesn't take effect, check the JS before adding more CSS.
- If a change needs a new file or a new line in a Hyperzod box, tell me the exact line to paste and which box it goes in.
- After every change: tell me the file changed, and that I must open GitHub Desktop, commit and click Push origin (unless you pushed it yourself). Then wait 5-10 minutes and hard refresh.

# BACKUPS (every change)
Before editing any file:
1. Copy the file you're about to edit into backups/ with a timestamp, e.g. backups/2026-09-30_1530_global-footer-1.js. Commit that backup alone with the message "backup before: <what I asked for>".
2. Then make the change in a separate commit.
3. In your final reply, tell me the backup file name.
If I say "restore" or "go back", restore the file from the newest matching backup, or from git history if needed, and show me what changed. The repo is the complete source of truth, so old versions are never lost.

# NEVER DO THESE
- Never browse or open my live website or app, and never use browser tools. Work only from files in this repo.
- Never ask me to paste the contents of a Hyperzod box. Each box only holds the loader lines listed in HOW THIS REPO WORKS.
- If a change doesn't show up for me, don't rewrite the code again. First check: was it pushed, and could the app or browser be serving a cached copy of the file? Tell me which is likely, and give me one test to confirm.

# STATUS WORDS
Use exactly these:
- "Committed": saved on my PC only
- "Pushed": on GitHub, only after I confirm it
- "Live": I confirmed it on the site or app
Never say "fixed" or "live" unless I confirmed it.

# WORKFLOW
1. I describe a change. You edit the right file(s) directly.
2. Check the syntax, then commit with a clear message and push to main. I don't need to approve each push.
3. Tell me: what changed (old value -> new value), which file, and "Wait 5-10 minutes, then Ctrl+F5."
4. If I say "revert", undo the last commit and push.
Never rewrite a whole file for a small change. Edit only what I asked for.

# REPLY STYLE
Short. No intro, no recap, no explanations unless I ask or something critical comes up. Format: what changed, file, what I should see. Then stop.

# ASKING QUESTIONS
If a NEW request is unclear, ask before working, all questions in one message, max 3. If my instruction is clear, or it's a revision, or I sent a screenshot as reference: don't ask, just do it.

# NO ASSUMPTIONS
Never mention a file, folder, setting, button or feature unless you have confirmed it exists. If something needs to exist first, say it doesn't exist yet and give the exact steps to create it. If you don't know how something is set up, ask me before continuing.

# CODE RULES
- GLOBAL ONLY: all changes apply to the whole site, every current and future merchant. Never target a specific shop, merchant name, ID, or product. Use structural selectors.
- Never guess class names. Use reference/ or ask me once to Inspect the element and paste the HTML.
- The storefront loads content dynamically. JS must handle late-loaded elements, never crash if an element is missing, and never run twice.
- Scope CSS tightly. Use !important only to beat an existing rule, and mark where.
- Mobile first, then desktop. Arabic/RTL: use logical properties (margin-inline-start etc.), never hardcode left/right.
- Generous spacing and breathing room, like Talabat. No cramped layouts.
- Never use zoom or transform scaling to resize the page.
- Fix the root cause, not symptoms.
- When I say "drastic", "bigger" or "way more", the change must be obvious at a glance. Go bold first. No timid tweaks.
- If I say it looks the same, you were wrong. Don't defend it. Find why it had no effect (selector mismatch, overridden style, cache) and increase the change.
- Never say "fixed" or "working" unless you actually checked. If you couldn't verify, say so in one line.

# BRAND (main reference; I may override it per request)
Full guide: https://app.notion.com/p/Brand-Identity-Guidelines-3c0273091f9e80f1a44cf1a963921f3d
Colors:
- Opus #CCCBE3: light surface, text on dark
- Blue Magenta #5A29DE: primary accent, headlines on light
- Appetite #ACE4AA: highlights, callouts
- Ultimate Orange #FF4000: CTAs, badges, alerts
- Satin Deep Black #1B2023: dark containers, text on light
- Background Black #000000: canvas backgrounds only
Rules:
- NEVER use pure white #FFFFFF or pure black #000000 for text, icons, or UI.
- Text on light = Satin Deep Black. Text on dark = Opus.
- Banned pairings: Blue Magenta + Satin Deep Black, Blue Magenta + Orange, Appetite + Opus. Orange + Satin Deep Black only for large bold text.
Fonts (I don't have the Aktiv files, never embed them):
- English: "Aktiv Grotesk", "Inter", system-ui, sans-serif
- Arabic: "Aktiv Grotesk Arabic", "IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif
- Headings Bold/Medium, body Regular.
Language: English first. Arabic only when I ask or when the task is bilingual.

# BEFORE EVERY PUSH, CHECK
Followed every instruction? Global, no single-shop code? Change obvious enough? On-brand? Only the files I needed? Reply short?
