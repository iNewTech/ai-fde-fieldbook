# Publish and contribute

The Markdown docs use VitePress. Netlify serves the static build; it does not run Python projects. All sections publish together; personal assessment stays in chat.

## Local setup

Use Node.js 22 or newer:

```sh
npm ci
npm run dev
```

The server prints the local address. Verify a release with:

```sh
npm test
npm run build
npm run preview
```

Content checks cover module routes, defense questions, video links and bilingual summaries. VitePress rejects broken internal page links. Python exercise tests intentionally fail until the learner implements the stubs; publishing checks are separate.

## Netlify

[Open Netlify import](https://app.netlify.com/start), select the existing GitHub repository **iNewTech/ai-fde-fieldbook**, and use branch `main`. Grant the GitHub integration access to this organization when prompted. The included `netlify.toml` supplies these settings:

| Setting | Value |
| --- | --- |
| Base directory | Repository root |
| Build command | `npm run build` |
| Publish directory | `docs/.vitepress/dist` |
| Node | 22 |

No model API keys are needed. The Netlify project is linked to GitHub, so every
push to `main` fires the GitHub-to-Netlify webhook, runs `npm run build`, and
publishes the new output automatically. Confirm the commit SHA under Netlify's
**Deploys** tab and wait for **Published** before sharing the change. Pull
request deploy previews can be enabled under **Deploy previews**. Suggested
site name: **fde-fieldbook**.

## Content workflow

Edit lessons in `docs/learn/`. Navigation comes from `docs/.vitepress/curriculum.mjs`; practice questions are in `docs/.vitepress/questions.mjs`. Follow `templates/lesson.md`, maintain the coverage map and keep relevant original video links. Every topic ends with English and Hinglish summaries.

Commit original lessons, synthetic fixtures and sanitized project evidence. Keep personal grades under ignored `.learning/`, secrets in runtime configuration, and the supplied course PDF outside the repository. Do not publish full exercise solutions or copy paid source content.

Use a reviewed branch for changes; the GitHub workflow checks pushes and pull requests. The Vite override pins a patched compatible build-tool version; recheck compatibility when upgrading VitePress.

The lesson gate stores a learner's 100% module result in browser storage and
offers a retry after failure. It is a learning aid, not access control: a public
repository cannot securely hide future lessons. Mentor review of the five
required checks and the mini-project remains the authoritative advancement gate.

Reference: [VitePress deployment guide](https://vitepress.dev/guide/deploy).
