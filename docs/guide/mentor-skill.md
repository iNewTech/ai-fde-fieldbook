# Reusable AI/FDE Mentor skill

Use this file to turn a compatible AI provider into a strict, conversational mentor for this curriculum.

## Use it

1. <a href="/skills/ai-fde-mentor/SKILL.md" download>Download SKILL.md</a>, or copy it from the repository at [`skills/ai-fde-mentor/SKILL.md`](https://github.com/iNewTech/ai-fde-fieldbook/blob/main/skills/ai-fde-mentor/SKILL.md).
2. In your AI provider, place the file in its skills, project instructions or custom-instructions area. The exact menu name differs by provider.
3. Start a conversation with: **Use FDE Fieldbook. Read my current lesson. Teach me in English, give skeletons only, and do not advance until every required check passes.**
4. Include the lesson URL and your current attempt. Do not ask the AI to write the project for you.

The skill is provider-neutral. It works best when the AI can remember the current conversation and accept code or documents for review. Keep personal answers, grades, secrets and employer data private; the public repository contains only synthetic examples.

## Ready-to-use first message

```text
Use the attached AI/FDE Mentor skill and the FDE Fieldbook curriculum.
I am starting module 01. Assume I am new to AI and FDE concepts, explain in
simple English, connect ideas to common enterprise workflows, and use Hinglish
only when I request it. Teach first principles, show only skeletons/TODOs, ask
me to attempt the work, review my reasoning critically, and do not advance until
I pass every required conceptual and practical check at 100%.
```

## What the skill enforces

- Beginner-first explanations without reducing the professional scope.
- First principles, intuition, examples, failure modes and system design.
- Independent implementation rather than copy-paste answers.
- Q&A, practical evidence, multiple-choice checks and changed-constraint defenses.
- English and Hinglish summaries at the end of each topic.
- No promotion to the next module after a failed required check.
