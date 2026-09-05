# 13. Fine-tuning and adaptation

Week 11 | Prerequisite: 12 | Output: adaptation experiment and decision record

## The enterprise problem

An invoice classifier handles common categories but misses company-specific labels. Meanwhile, its policy answers are outdated. These failures may need different interventions.

## First principles

Prompting supplies instructions at inference time; RAG supplies external evidence; fine-tuning changes model parameters. Prefer retrieval for frequently changing facts and test adaptation when the task needs consistent specialized behavior. First establish whether simpler rules, better examples or corrected labels solve the problem.

Supervised fine-tuning uses input-output examples to reduce a training loss. For a correct target token assigned probability 0.1, negative log likelihood is about 2.30; at probability 0.5 it is about 0.69. Gradient-based optimization adjusts parameters to reduce such errors. Lower training loss can coexist with worse generalization: hold out customers, templates or time periods that would otherwise leak near-duplicates.

LoRA trains low-rank updates instead of every weight. QLoRA combines a quantized frozen base with adapter training to reduce memory needs. Quantization trades representation precision for memory and compute characteristics; measure the effect on the task. Distillation trains a smaller student using teacher-produced targets, whose errors and data rights still need review.

## Trace an example

A model improves training classification from 85% to 99% but falls from 82% to 78% on unfamiliar invoice templates. It learned the training distribution too narrowly. Compare held-out label accuracy, critical-class recall, inference cost and maintenance burden before approving adaptation. Training expenditure is only one part of lifecycle cost.

## Independent work

Prepare a small synthetic labeled dataset with provenance and a leakage-resistant split. Compare prompt-only and retrieval-assisted baselines. Run a small local adapter experiment if your hardware permits; otherwise analyze a reproducible public training trace and design the experiment, recording that hands-on training remains a pending practical check. Never silently mark that check passed. Explain SFT, LoRA, QLoRA and distillation in your decision record.

## Required checks

1. Select prompting, RAG or tuning for three different failure causes.
2. Explain training loss, gradient updates and overfitting.
3. Demonstrate dataset provenance and a defensible split.
4. Compare a completed adaptation experiment with a baseline on held-out cases.
5. Defend quality, cost and maintenance trade-offs, including quantization.

## Video and reading

- Video course: [Finetuning Large Language Models](https://www.deeplearning.ai/courses/finetuning-large-language-models).
- Primary reading: [LoRA paper](https://arxiv.org/abs/2106.09685), [QLoRA paper](https://arxiv.org/abs/2305.14314), [Hugging Face PEFT](https://huggingface.co/docs/peft/index).

## Summary

### English

Adapt parameters for demonstrated behavior gaps, not as a default cure. Prove improvement on unseen data and include operating costs in the decision.

### Hinglish

Fine-tuning har problem ka answer nahi. Pehle failure ka cause samjho, phir unseen data par improvement aur total cost prove karo.
