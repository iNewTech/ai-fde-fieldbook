# 10. Evaluation and observability

Week 8 | Prerequisite: 09 | Output: P3 evaluation report and release gate

## The enterprise problem

Your RAG demo answers ten questions convincingly. Before a pilot, the support lead asks whether it works on ambiguous orders, old policies, denied access and mixed-language requests. You need evidence that can survive a prompt or model change.

## First principles

An evaluation set is a measurement instrument. Define what behavior matters, sample representative inputs and record the expected evidence or action. Separate development cases used for iteration from an untouched held-out set used for acceptance. Split by source, customer or time when random splitting would leak near-duplicates across boundaries.

Use different metrics for different failure stages. Retrieval metrics assess evidence selection. Claim support and citation correctness assess grounding. Task completion measures whether the user can finish the workflow. Schema validity, refusal behavior, latency and cost remain separate. A single composite number can hide a severe defect.

An LLM judge is another model whose behavior must be evaluated. Provide a rubric and calibrate its decisions against human-labeled examples, including disagreements and reversed answer order. Do not let the candidate response rewrite the judge's instructions. When judge and generator share biases, a high score may reflect agreement rather than truth.

Observability explains behavior of actual runs. A trace should connect request, retrieval, model, validation and tool spans with stable IDs and version metadata. Record latency and usage without indiscriminately storing raw personal data. Logs describe events, metrics aggregate populations and traces show a request's path; each answers a different question.

A regression gate compares a candidate with a baseline on frozen conditions. Report counts as well as percentages. A score of 95% on 20 cases means one observed failure, not reliable evidence of a 5% production failure rate. Small samples and unrepresentative slices create uncertainty even when a dashboard looks precise.

## Trace an example

Model A has 36/40 task successes; B has 37/40. B also exposes one unauthorized passage. That critical isolation failure blocks release regardless of the higher average. Inspect paired cases: which changed, why, and whether the improvement survives a fresh sample. Keep retrieval errors separate from fluent unsupported answers.

## Predict the failure

The test set contains training duplicates, the judge rewards verbosity, and the trace omits index version. Explain how each prevents a meaningful comparison. Adding a new evaluation library will not automatically repair the protocol.

## Independent work

Build at least 40 held-out synthetic cases across answerable, unanswerable, contradictory, tenant-restricted and exact-identifier slices. Implement deterministic checks and a human review sheet. Use RAGAS or DeepEval for one measured comparison and inspect a trace in Langfuse or LangSmith. Document one disagreement between a judge and a human reviewer. Produce the P3 evaluation report.

## Required checks

1. Defend the dataset split and identify a leakage route.
2. Calculate per-slice results with counts and limitations.
3. Calibrate a judge against human labels and explain disagreements.
4. Trace a failed answer to the responsible stage and version.
5. Define a release gate that cannot average away critical failures.

## Video and reading

- Video course: [Evaluating and Debugging Generative AI](https://www.deeplearning.ai/courses/evaluating-debugging-generative-ai). Focus on experiment tracking and evaluation discipline.
- Primary reading: [RAGAS documentation](https://docs.ragas.io/), [DeepEval documentation](https://deepeval.com/docs/getting-started) and [OpenTelemetry concepts](https://opentelemetry.io/docs/concepts/).

## Summary

### English

Evaluation estimates whether a system meets a task; observability explains what happened in a run. Version both the system and the measurement protocol, and inspect critical slices separately.

### Hinglish

Evals batate hain system task par kitna sahi hai; traces batate hain ek request mein kya hua. Dataset aur versions freeze karo, aur serious failures ko average score ke peeche mat chhupao.
