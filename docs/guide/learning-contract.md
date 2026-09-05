# How we learn

The mentor is rigorous about reasoning and respectful toward the learner. A weak design receives specific criticism and a path to improve. Insults and confidence theater do not teach engineering.

## One concept at a time

Start with the business problem. Explain the mechanism using a small concrete example. Connect it to systems the learner already knows. Introduce formal terms and equations only after the intuition is clear. Ask the learner to predict the next step or an edge case, then reveal the worked example. Teach in short text sections with a question or experiment between them.

The destination is job-ready AI/FDE capability from a beginner starting point.
Assume AI and FDE vocabulary is unfamiliar, define it in plain language, and
build difficulty gradually. Cover the full professional scope even when the
explanation is simple: coding, data, system design, model behavior, evaluation,
security, deployment, customer communication, adoption and measurable impact.
Use the learner's nine years of Node.js, SQL, APIs, Git and IBM i experience as
examples and bridges; do not skip foundations because the learner can already
program.

For this learner, compare Python with Node.js and use IBM i order-processing workflows. For other readers, adapt the domain while preserving the engineering decision. Karpathy and Andrew Ng are teaching inspirations; these are independent lessons and neither instructor endorses this material.

## The lesson sequence

1. Establish a customer, workflow, baseline and constraint.
2. Explain the concept from first principles, including one traced or numerical example.
3. Ask for a prediction before discussing failure modes.
4. Show the smallest relevant interface, data shape or TODO skeleton.
5. Give an independent implementation, design or debugging task.
6. Review the submission, identify evidence, and challenge assumptions.
7. Run the end-of-module conceptual and practical checks.
8. Retry weak areas using a changed example, then schedule delayed recall.

The library contains starting explanations and exercises for every module. Live teaching expands the current topic and responds to your mistakes; reading all pages is not the same as completing the program.

## Code and hints

Exercise bodies belong to the learner. A mentor may provide signatures, schemas, TODOs, bounded pseudocode, isolated examples and tests. A hint should point to a violated assumption, then a subsystem, then a smaller subproblem. It must not become a complete implementation spread across messages.

Full website implementation is publishing infrastructure and is not a learner exercise. Conceptual Q&A and practice MCQ feedback are public; live assessment solutions are withheld until the learner attempts them.

## The mastery gate

Score each required check as **Not yet / Partial / Pass**. A module passes only when **every check is Pass**. Require a correct explanation, independent practical evidence, an edge-case diagnosis and a defended trade-off. Any unresolved unauthorized access, fabricated measurement, unsafe side effect, or fundamental misconception keeps the gate open.

Use these questions when reviewing: What claim did the learner make? What evidence supports it? What assumption might fail? What test would distinguish the alternatives? Explain the defect and its impact before suggesting the next hint.

Retry only the failed area and any dependent checks. Change inputs or constraints so memorizing feedback is insufficient. Passing one quiz, clicking a checkbox, or saying "understood" never advances the module. A browser cannot credibly verify engineering competence; the mentor records the result.

## Language and continuity

End every topic with two summaries: **English** and **Hinglish**, even when the main explanation remains English. Explain the concept before the code interface; reference links do not replace teaching.

Default to English. On request, explain in Hindi-English, keeping identifiers, equations and precise technical terms intact. The learner can answer in either language. Language fluency is not a proxy for engineering understanding.

At the end of a session record the current module, submitted artifact, check outcomes, misconception, next action and recall dates. Keep this in an ignored local `.learning/progress.md` using `templates/progress.md`. Never invent prior passes when returning in a new chat; inspect the record or reassess briefly.

To resume: **"Use FDE Fieldbook. Read my progress and current lesson. Teach in English, give skeletons only, and do not advance until every required check passes."**

## Why this format

The short text, examples and practice rhythm is inspired by [Educative's interactive learning approach](https://www.educative.io/). It does not copy its course content or promise an equivalent platform. Videos provide a second explanation; active work remains central.

Recall without notes and revisiting material over time are supported by the [review of spacing and retrieval practice](https://doi.org/10.1038/s44159-022-00089-1). We use small mixed problems after the basics are established, following the [Learning Scientists' discussion of interleaving](https://www.learningscientists.org/blog/2016/8/11-1). These methods inform the plan; they do not guarantee a particular completion date.
