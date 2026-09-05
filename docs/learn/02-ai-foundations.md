# 02. AI and model foundations

Week 1 | Prerequisite: 01 | Output: model mental model and selection experiment

## The enterprise problem

A manager wants an LLM to calculate invoice totals and explain unusual charges. The calculations already exist in Db2. Your first decision is which part needs language understanding and which part should remain a deterministic computation.

## First principles

A language model maps context to a distribution over possible next tokens. Tokens are pieces of a representation, not necessarily words. Repeatedly selecting a next token produces text. Training adjusts parameters so useful patterns become easier to predict; inference applies those learned parameters to the supplied context. A polished answer is not a database lookup or proof of truth.

An embedding turns an item into a numeric vector. A dot product measures alignment; cosine similarity divides by vector lengths to compare direction. These numbers are learned features, not human-readable facts. Attention uses query-key compatibility to weight value representations, allowing a token's representation to depend on relevant context. Positional information distinguishes order. A transformer stacks such operations with feed-forward transformations; you need this mechanism to reason about context, not to train a frontier model.

Training, instruction adaptation and preference optimization have different roles. Training learns broad patterns; supervised examples teach desired task behavior; preference methods can favor some responses over others. None guarantees reliable access to today's enterprise policy. Retrieval supplies evidence at request time; tool calls let the application compute or fetch exact values.

Classical ML remains relevant. A classifier predicts a label using features; evaluate its precision, recall and generalization on data separated from training. Precision answers "of predicted positives, how many were correct?" Recall answers "of actual positives, how many were found?" A classifier or rules engine may outperform a language system on a stable, structured task.

## Trace an example

For 100 flagged invoices, 80 are truly anomalous; another 20 anomalous invoices were missed. Precision is 80/100 = 0.8; recall is 80/100 = 0.8. If every false alarm takes ten minutes to review, 20 false alarms create 200 minutes of work. Now compare a model's narrative explanation against the exact SQL-derived total. The narrative must not become the source of arithmetic truth.

## Predict the failure

A model memorizes a familiar invoice format but fails on a different business unit. A benchmark average hides that slice. A large context window also does not guarantee that every supplied fact is used correctly. Open weights do not automatically imply permission for every commercial use or lower operating cost.

## Independent work

Draw tokens -> embeddings -> attention blocks -> output probabilities -> generated answer. Explain each transition in plain English. Create twelve synthetic cases split between exact calculations, classification and document questions. Propose a deterministic baseline and a model-assisted version. Compare a GPT-family model, Claude, Gemini and an open-weight option by required capabilities, data boundary, latency and operating burden; verify current capabilities when running the experiment.

## Required checks

1. Explain why next-token training can produce plausible false statements.
2. Distinguish an embedding, model parameter and context token.
3. Calculate precision and recall from a changed confusion matrix.
4. Decide which invoice steps should remain deterministic.
5. Defend model selection using task evidence instead of brand popularity.

<TopicSupport module="02-ai-foundations" />

## Video and reading

- Video: [Karpathy, Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g). Focus on inference, training and customization; older model comparisons are historical.
- Original paper: [Attention Is All You Need](https://arxiv.org/abs/1706.03762). Read the architecture figure and attention definition first.

## Summary

### English

LLMs generate plausible continuations from learned patterns. Use explicit evidence, deterministic computation and task-specific evaluation to decide where they belong in a system.

### Hinglish

LLM learned patterns se agla token predict karta hai; confident answer sach hone ki guarantee nahi. Exact calculation SQL ya code se karao, aur model ko evidence aur evals ke saath use karo.
