# WHO I AM
I'm the Head of Marketing at HyperGo (hypergo.bh), a multi-vendor marketplace in Bahrain built on Hyperzod. I'm not a developer. This repo is live: GitHub Pages serves these files to my Hyperzod site and app.

# HOW THIS REPO WORKS
Hyperzod has 3 sections (Global, Web, App), each with 3 boxes: Custom HTML Head, Custom HTML Footer, Custom CSS. Each box loads its code from a file in this repo through a <link> or <script> line. There is no build step. Plain vanilla CSS and JS only.

Files and where they load:
- global-footer.css, global-footer-1.js, global-footer-2.js: Global Custom HTML Footer
- web-head.css, web-custom.css: Web Custom HTML Head (that box also keeps the IBM Plex Sans Arabic Google Fonts links)
- web-footer.js: Web Custom HTML Footer
- app-footer.js: App Custom HTML Footer
- Empty boxes: Global Head, Global CSS, Web CSS, App Head, App CSS
- If a file exists in the repo that this list doesn't mention, tell me before editing it.
- reference/design-system.md: how HyperGo currently looks (colors, typography, spacing, shapes, components, motion, RTL rules, decided target looks, conflicts and unknowns), built from the code. Read it before any visual change (see DESIGN SYSTEM).
- reference/HyperGo_Hyperzod_Reference.txt: selectors, Hyperzod behavior and known failures. Read it before writing any selector or Hyperzod code. The current repo files are the source of truth, not old comments in it.
- reference/home.html, reference/store.html, reference/search.html, reference/product.html: saved copies of the real website pages (home, a merchant store, search results for "Burgers", a product page), copied from the browser while logged out. Use them to find real selectors and page structure before writing any CSS or JS for the website. They cover the website only, not the app screens, and are snapshots that can go out of date. If a selector you need isn't in them, ask me for a new copy of that page.
- backups/: backup copies. Add new ones, never edit or delete existing ones.
- Temporary diagnostics: the hgdiag panel is marked with TEMP-DIAGNOSTIC-START and TEMP-DIAGNOSTIC-END comments. The Eruda tool (secret word hgeruda) is marked with TEMP-ERUDA-START and TEMP-ERUDA-END comments. Never edit or remove either one unless I ask.

Rules:
- Edit the existing file in place. Never append a second copy of code, and never create a new file unless I ask, because duplicate code creates competing observers and selectors.
- Global code runs on both web and app. Web-only code goes in web-*, app-only code goes in app-*. Never put Web or App code in Global.
- Some Global CSS is created at runtime by the JS (style IDs like hg-extra-style). When a style change doesn't take effect, check the JS before adding more CSS.
- If a change needs a new file or a new line in a Hyperzod box, tell me the exact full text to paste and which box it goes in.

# DESIGN SYSTEM (every visual change)
- Before any change that adds or changes how something looks (spacing, size, color, border, shape, layout, animation, or a new element), read reference/design-system.md and match it. I will not repeat our style in every request. Applying it is your job.
- Use only values that exist in that file or in the current code. Never invent new colors, sizes, radii, shadows or animations. When adding a new element, copy the closest existing component.
- Decided target looks in that file override what the current code does today.
- If the thing you're changing has an entry under CONFLICTS in that file, don't pick one silently. Ask me which style to use, in one question, before editing.
- If something you need is listed under UNKNOWN or isn't in the file, match the closest existing component and say so in your report.
- In your report, list which design-system values you used.
- If I approve a new look, or a change I asked for introduces or changes a style value, update reference/design-system.md in the same task (backup first, as BACKUPS says) and tell me which lines changed. Never update it for changes I didn't ask for.

# WHEN I SAY IT STILL DOESN'T WORK
- I check the version marker and I restart the app myself, every time, before I report anything. The marker is always there. Assume the new file is loaded.
- So when I say a fix didn't work, the fix was wrong or something is blocking it. It is never a cache or deploy problem unless I tell you the marker is missing.
- Never tell me to check the marker, wait for GitHub, close the app, or refresh. Never suggest cache, a stale copy, or a deploy delay. Never ask me to check anything I've already done.
- Instead, investigate the code: Did the fix target the element I'm actually looking at? Is another rule, script or runtime-generated style overriding it later? Does a different file or section also render this thing? Is something hiding or recreating the element? Is it running in the wrong place (Global vs Web vs App)?
- Tell me what you found in one or two plain sentences, with the evidence from the code. If the code can't prove it, build the temporary diagnostic (see BUGS: ROOT CAUSE FIRST). Never write a second guess.

# BUGS: ROOT CAUSE FIRST
- Never write a fix for a bug until the cause is proven with evidence: numbers from a diagnostic, a frame-by-frame reading of my screen recording, or code you can point to. A guess is not a cause.
- Before changing anything for a bug, tell me the cause in one or two plain sentences, with the evidence.
- If a fix for the same bug already failed once, don't write another fix. Build a temporary diagnostic instead: hidden behind a secret word, inside TEMP-DIAGNOSTIC-START and TEMP-DIAGNOSTIC-END comments, read-only, changing nothing on the page. It must show live numbers for the element AND its parent containers (position, size, computed position), plus viewport offset and scroll. Compare English vs Arabic, app vs website, and with vs without the keyboard when relevant.
- Fix the cause, never the symptom. Never measure an element and move it back afterward. Prevent the problem instead.
- If the cause can't be proven from the repo files and my recording, say so and ask me for what's missing. Don't guess.
- One bug per request. Never bundle bugs together.

# BACKUPS (every change)
Before editing any file:
1. Copy the file you're about to edit into backups/ with a timestamp, e.g. backups/2026-09-30_1530_global-footer-1.js. Commit that backup alone with the message "backup before: <what I asked for>".
2. Then make the change in a separate commit.
3. In your final reply, tell me the backup file name.
If I say "restore" or "go back", restore the file from the newest matching backup, or from git history if needed, and show me what changed.

# NEVER DO THESE
- Never browse or open my live website or app, and never use browser tools. Work only from files in this repo.
- Never ask me to paste the contents of a Hyperzod box. Each box only holds the loader lines listed in HOW THIS REPO WORKS.
- Never blame cache, a stale copy or a deploy delay for a fix that didn't work (see WHEN I SAY IT STILL DOESN'T WORK).
- Never tell me to edit, replace or add a part of a file, prompt or instruction. Always give the complete final version, ready to paste in full.

# STATUS WORDS
Use exactly these:
- "Committed": saved on my PC only
- "Pushed": on GitHub, only after I confirm it
- "Live": I confirmed it on the site or app
I push with GitHub Desktop. After every commit, tell me to open GitHub Desktop and click Push origin. Never say "fixed" or "live" unless I confirmed it.

# SCOPE (every change)
- Do only what the request says. If it says keep the current look, adjust it, don't redesign it. Never add design decisions I didn't ask for (colors, sizes, effects, layouts).
- If a request mentions a screenshot or recording and none is attached, stop and ask me for it. Don't guess what it looks like.
- If the request is unclear or could be read two ways, ask me one question before editing.
- Changes apply globally to every merchant, never to one shop. Use structural selectors. Never target a merchant name, ID or product.
- Before finishing, list exactly what you changed and what you deliberately left untouched.

# VERSION MARKER (every change)
- Put a marker comment on line 1 of every file you change, like /* hg-version 2026-09-30-1930 */, and update it each time.
- In your final reply, give me the public link of each changed file (https://pexy613.github.io/hypergo-site/<file name>) and the marker. I check it myself. Don't ask me to confirm it and don't repeat the check steps.

# REPLY STYLE
Short. No intro, no recap. Format: what changed, file, backup name, marker and link, what I should see. Then stop. Explain only when I ask or when something is critical.

# ASKING QUESTIONS
If a NEW request is unclear, ask before working, all questions in one message, max 3. If my instruction is clear, or it's a revision, or I sent a screenshot as reference: don't ask, just do it.

# NO ASSUMPTIONS
Never mention a file, folder, setting, button, tool or feature unless you've confirmed it exists. If something needs to exist first, say it doesn't exist yet and give the steps to create it. If you don't know how something is set up, ask me first.

# CODE RULES
- Never guess class names. Use reference/ and the repo code, or ask me once to Inspect the element and paste the HTML.
- The storefront loads content dynamically. JS must handle late-loaded elements, never crash if an element is missing, and never run twice.
- Scope CSS tightly. Use !important only to beat an existing rule, and mark where.
- Mobile first, then desktop. Arabic/RTL: use logical properties (margin-inline-start etc.), never hardcode left/right.
- Generous spacing and breathing room, like Talabat. No cramped layouts.
- Never use zoom or transform scaling to resize the page.
- When I say "drastic", "bigger" or "way more", the change must be obvious at a glance. Go bold first.
- If I say it looks the same, you were wrong. Don't defend it. Find why it had no effect (wrong target, overridden style, something recreating the element) and increase the change.
- Never say "fixed" or "working" unless you actually checked. If you couldn't verify, say so in one line.

# BRAND (reference)
Colors: Opus #CCCBE3, Blue Magenta #5A29DE, Appetite #ACE4AA, Ultimate Orange #FF4000, Satin Deep Black #1B2023, Background Black #000000.
- Pure white #FFFFFF and pure black #000000 are allowed. The current code already uses them. Don't flag or remove them.
- Keep the colors the current code uses. Don't introduce new colors unless I ask.
- Anything the current code already has or does (colors, gradients, shadows, effects, patterns, animations) is allowed and encouraged. Reuse it, and match it when adding something new.
- The brand guide is a reference for the palette, fonts and voice, not a rulebook. Banned pairings and color bans don't apply unless I ask.
- Fonts (I don't have the Aktiv files, never embed them): English "Aktiv Grotesk", "Inter", system-ui, sans-serif. Arabic "Aktiv Grotesk Arabic", "IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif. Headings Bold/Medium, body Regular.
- Logos: never stretch, recolor, or redraw.
- Voice: direct, clear, confident. No hype.
- Language: English first. Arabic only when I ask or when the task is bilingual.

# BEFORE EVERY PUSH, CHECK
Followed every instruction? Cause proven before the fix? Matched reference/design-system.md? Global, no single-shop code? Change obvious enough? Only the colors and styles the code already uses? Only the files I needed? Backup made and named? Marker added? Reply short?
