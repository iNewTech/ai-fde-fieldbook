# 06. Visual and no-code prototyping

Week 4 | Prerequisite: 05 | Output: prototype experiment and P2 review

## The enterprise problem

A support lead needs to see how a proposed assistant would fit into her team's workflow before approving deeper work. A visual pipeline can reveal assumptions faster than a polished full application, provided you can explain what each step does.

## First principles

A prototype is an experiment about a decision. State the hypothesis, representative inputs, expected observation and rejection condition. "People like the demo" is weak evidence. "Support staff can identify the correct policy passage and decide whether to use the suggestion on ten representative cases" is observable.

A visual workflow makes dependencies explicit: receive a question, retrieve evidence, generate a draft, validate, then ask for human review. Each box has inputs, outputs, ownership and failure semantics. The underlying network calls, credentials and data retention still exist even when code is hidden by a visual editor.

Distinguish orchestration from autonomy. A fixed flow chooses steps in advance; an agent chooses among permitted actions at runtime. A no-code tool can implement either. Complexity is determined by behavior, not the amount of visible code. Exportability, reproducibility and trace access matter when moving from a demo to a maintained service.

The supplied brochure mentions a private QInsights lab. This repository does not provide that access. Use a local visual builder such as Langflow, or make a node-and-edge diagram backed by your small service. The learning requirement is to trace a real prototype's data flow and test its hypothesis; a specific commercial tool is not the objective.

## Trace an example

Take five policy questions and five ambiguous support tickets. Before each run, write the expected retrieval evidence and escalation behavior. Have a reviewer try to distinguish a draft backed by policy from one with no support. Record their decisions and the traces. If unsupported answers appear equally convincing, change the product interaction rather than merely the wording of the prompt.

## Predict the failure

The visual builder stores raw prompts externally, a hidden retry duplicates a tool call, and a manually selected document makes every demo look good. These problems are hard to see from the presentation screen. Trace execution and inspect settings before claiming that the prototype transfers to production.

## Independent work

Build a four-to-six-step flow for the P2 triage task. Use synthetic data, label the credential and trust boundary of every step, and export the flow or capture a reproducible diagram. Run ten cases, including a missing source and a provider timeout. Write a one-page finding: hypothesis, observation, counterexample, decision and remaining uncertainty. Supply the prototype's limitations to the reviewer before the demo.

## Required checks

1. Name the hypothesis and an observation that would reject it.
2. Trace data, credentials and errors through every node.
3. Distinguish a fixed workflow from an agentic decision loop.
4. Reproduce the prototype on a second run without hidden manual fixes.
5. Explain what must change before this prototype can support a real pilot.

<TopicSupport module="06-visual-prototyping" />

## Video and reading

- Video lecture: [FSDL: Launch an LLM App in One Hour](https://fullstackdeeplearning.com/llm-bootcamp/spring-2023/launch-an-llm-app-in-one-hour/). Focus on the prototype experiment, not copying its implementation.
- Primary reading: [Langflow documentation](https://docs.langflow.org/). Review flow components and deployment boundaries.

## Summary

### English

Use visual prototypes to test a workflow hypothesis quickly. Trace every node, preserve reproducibility and state exactly what the experiment has and has not established.

### Hinglish

Visual prototype se workflow ki assumption jaldi test karo. Har node ka data aur failure samjho, run reproduce karo, aur demo se kya prove hua hai woh clearly bolo.
