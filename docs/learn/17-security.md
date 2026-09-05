# 17. Security and responsible AI

Week 15 | Prerequisite: 16 | Output: P5 attack tests and remediation evidence

## The enterprise problem

A policy PDF includes hidden instructions telling the assistant to reveal all customers' orders. A separate test shows worse handling of mixed-language support requests. Both issues need explicit evaluation and controls.

## First principles

Threat modeling starts with assets, actors, trust boundaries and permitted effects. Prompt injection occurs when untrusted content attempts to influence behavior as though it were an instruction. Direct injection arrives from a user; indirect injection may arrive through documents or tool outputs. Delimiters and classifiers can help, but cannot establish a perfect boundary by themselves.

Contain consequences in the application: least-privilege tools, identity-derived authorization, bounded execution, restricted destinations and human approval for defined effects. Validate structured output and factual support separately. Retrieval poisoning can make malicious content appear relevant; retain provenance and review source changes.

PII handling includes minimization, redaction, retention and access controls. Redaction is imperfect, especially with unusual formats or multilingual content. Assess logs, traces, embeddings, caches and backups as well as prompts. A refusal alone does not prove that sensitive content was never fetched or transmitted.

Responsible-AI evaluation tests outcomes for relevant user groups and workflows. Compare error types, false refusals and required human effort across language or domain slices. Small sample sizes require cautious interpretation. An input filter that blocks legitimate users can shift harm rather than remove it.

## Trace an example

The model ignores a malicious document, but the full document was already sent to an unauthorized external endpoint in tracing. Answer-level red teaming would miss this data-flow failure. Inspect the complete request path and test effects, not only final wording.

## Independent work

Create 20 local attack cases against your own synthetic application: direct/indirect injection, forbidden records, malicious tool output, oversized input and data-exfiltration attempts. Add language and ambiguity slices for quality review. Document exploit precondition, observed effect, mitigation and retest evidence. Do not probe unrelated live services.

## Required checks

1. Draw assets and trust boundaries with a plausible attack path.
2. Distinguish prompt guidance from enforceable application controls.
3. Demonstrate denied effects and redacted telemetry under attack.
4. Evaluate false refusals and unequal error rates by relevant slice.
5. Retest each reported issue and state residual limitations.

<TopicSupport module="17-security" />

## Video and reading

- Video lecture: [FSDL Ethics](https://fullstackdeeplearning.com/course/2022/lecture-9-ethics/).
- Primary reading: [OWASP GenAI Security Project](https://genai.owasp.org/) and [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).

## Summary

### English

Treat untrusted content as evidence, constrain effects outside the model, and test security and user-impact failures across the complete data path.

### Hinglish

Document ya tool output ko authority mat do. Real permissions application mein enforce karo, aur final answer ke saath poora data flow aur user impact bhi test karo.
