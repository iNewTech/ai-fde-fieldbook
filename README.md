# FDE Fieldbook

An independent AI/FDE study library by iNewTech, designed to take a learner
from limited AI/FDE knowledge to job-ready enterprise deployment capability,
using existing Node.js and IBM i experience as a bridge.

**20 study weeks + 2 buffer weeks, 15 hours/week.** Includes 24 lessons,
answered Q&A after every topic, 24 topic mini-projects, 8 cumulative milestone
projects, 24 interactive practice questions, 120 defense questions, video
references, English/Hinglish summaries and system design checkpoints.

## Start

- [Study plan](docs/plan/index.md)
- [Learning contract](docs/guide/learning-contract.md)
- [System design](docs/plan/system-design.md)
- [Projects](docs/projects/index.md)
- [Syllabus coverage](docs/plan/coverage.md)

Preparing this library does not start lessons. Explicitly ask to begin in chat.
The mentor explains concepts in simple language first, gives skeletons only and
advances only when all required understanding and practical checks pass. Simple
language does not mean reduced coverage: the plan includes coding, data, system
design, AI systems, production, security, customer delivery and impact.

## Website

```sh
npm ci
npm run dev
```

Use Node.js 22+. Run `npm test` and `npm run build` before publishing.
Import `iNewTech/ai-fde-fieldbook` into Netlify; `netlify.toml` supplies settings.
See [publishing](docs/guide/publishing.md). No model API key is required.

## Structure

```text
docs/learn/       Concept lessons and assessment gates
docs/plan/        Schedule, system design and coverage
docs/projects/    Eight enterprise project briefs
docs/practice/    Interactive question bank
docs/references/  Original video, paper and documentation links
docs/guide/       Diagnostic, learning contract, Q&A and publishing
docs/.vitepress/  Navigation, search, practice data and theme
projects/         Learner interfaces and selected Python contract tests
data/             Original synthetic seed fixtures
templates/        Lesson, architecture and private progress formats
scripts/          Publishing validation
tests/            Documentation infrastructure tests
.github/          Continuous integration
.learning/        Ignored personal answers and mentor feedback
```

Exercise bodies are deliberately unfinished. Their Python tests fail until you
implement them; `npm test` checks publishing, not learner mastery. Read the
[learner workspace instructions](projects/README.md).

This is independent material, not an IIT Delhi, OpenAI, Educative, Karpathy or
Andrew Ng course. It grants no credential or employment guarantee. Sources are
linked, not redistributed. Enterprise cases are synthetic unless labeled otherwise.

Names considered: **FDE Fieldbook** (chosen), **Enterprise AI Lab**, **Deploy & Learn**.
Repository: `ai-fde-fieldbook`. Suggested Netlify name: `fde-fieldbook`, not reserved.
