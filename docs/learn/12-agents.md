# 12. Agent harnesses and workflows

Week 10 | Prerequisite: 11 | Output: P4 controlled text-based agent workflow

## The enterprise problem

Support questions sometimes need both a policy lookup and current order data. A proposed multi-agent system assigns "researcher," "analyst" and "reviewer" roles. Your job is to establish whether those roles improve measured task completion enough to justify the extra coordination.

## First principles

A harness is the surrounding system that manages a model's context, tools, state, execution and feedback. The agent loop observes state, proposes an action, receives a result and decides whether to continue. A useful loop has a stop condition and bounded resources. Otherwise, failures can turn into repeated calls, escalating cost or repeated business actions.

A fixed workflow determines transitions in advance. An agent can choose a path based on observations. Start by drawing the state machine: received, evidence-needed, evidence-ready, draft-ready, awaiting-approval, completed or failed. Define which component owns each transition and which state must survive a restart. A list of chat messages alone is rarely a sufficient business-state model.

Serial work is appropriate when one step depends on another. Parallel work is appropriate when independent calls can run safely at the same time. Two 400ms independent reads may complete in about 400ms plus overhead, but a later decision still waits for required evidence. Parallel writes can race, and parallel agents may return inconsistent versions of the same entity.

Planner-executor designs separate proposed steps from execution. Validate a plan against current permissions and budgets before executing it. Reflection or critique can catch mistakes, but a second model agreeing with the first is not independent proof. Shared context, model families and source errors create correlated failures.

Frameworks such as LangGraph and CrewAI offer different abstractions for state and collaboration. Understand the underlying behavior before using the abstraction. Persistence, human approval and resume semantics must preserve exactly what was approved. A restart after a completed side effect is a classic place for duplication.

## Trace an example

An order specialist reads a shipment status while a policy specialist retrieves the return contract. A coordinator checks source versions and produces a proposed response. If the policy specialist times out, the coordinator should not fabricate policy or silently reuse another tenant's result. It may return a partial status answer with an explicit limitation or escalate according to the workflow contract.

## Predict the failure

The reviewer repeats the planner's unsupported claim, a loop never reaches its stop state, and a resumed run repeats an approved action. Explain the state and evidence needed to detect each failure.

## Independent work

Compare a fixed pipeline, a single tool-using agent and two bounded specialists on the same 30 synthetic cases. Implement one with LangGraph and inspect a small equivalent CrewAI flow. Measure task success, denied actions, tool calls, latency and cost. Keep the simpler design unless the added system demonstrates a useful improvement. P4 supplies only interfaces and acceptance criteria.

## Required checks

1. Draw the full state machine including failure, approval and termination.
2. Defend serial versus parallel execution for each dependency.
3. Demonstrate a loop budget and restart-safe behavior.
4. Explain why multiple agents can share a single underlying error.
5. Present a fair baseline comparison and justify the chosen architecture.

## Video and reading

- Video course: [AI Agents in LangGraph](https://learn.deeplearning.ai/courses/ai-agents-in-langgraph). Focus on persistence, streaming and human review.
- Primary reading: [Anthropic, Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) and [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview).

## Summary

### English

Agent engineering is controlled state, action and evidence management. Add autonomy or specialists only when a measured workflow benefits, and keep permissions, budgets and recovery explicit.

### Hinglish

Agent banana sirf role prompts likhna nahi hai. State, tools, limits aur recovery manage karni hoti hai. Extra agents tabhi rakho jab same tests par unka clear benefit dikhe.
