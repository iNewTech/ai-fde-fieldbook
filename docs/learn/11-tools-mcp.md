# 11. Tool calling and MCP

Week 9 | Prerequisite: 10 | Output: authorized order tool and MCP adapter

## The enterprise problem

The assistant needs current shipment status and may eventually draft a return request. Reading an order and changing it have different authority requirements. A model's choice of tool must not grant it unrestricted ERP access.

## First principles

Tool calling is a protocol between a model and an application. The model proposes a named operation with structured arguments. The application validates the call, binds identity, enforces policy, performs the permitted operation and returns an observation. The model does not execute the operation merely by emitting JSON.

A tool contract should specify purpose, input types, allowed scope, output shape, timeout and side effects. Tool descriptions affect selection quality. Runtime credentials and authorization determine actual capability. Derive customer scope from the authenticated request, not from a tenant string selected by the model. Avoid broad SQL or shell tools when a bounded `get_order_status` operation suffices.

Retries require business semantics. A read may be retried within a deadline. A write can be dangerous if the first attempt committed and the acknowledgement was lost. Use idempotency, reconcile unknown outcomes and require approval for the exact intended effect. Approval of a draft is not approval of a later modified operation.

MCP standardizes interactions between hosts, clients and servers exposing tools, resources and prompts. It can reduce repeated integration work, but it is not an authorization policy or a guarantee that a server is trustworthy. Inspect the server's provenance, transport, capabilities and permission model. Treat resource contents and tool results as untrusted evidence.

Bound tool use by allowed operations, call count, time, output size and network destinations. Tool output can itself contain malicious instructions. Keep that content separate from governing instructions and prevent it from expanding privileges. Log attempted and denied actions with correlation IDs, while redacting sensitive arguments.

## Trace an example

The model proposes `get_order_status(order_id="O42", tenant="B")` during tenant A's session. The application must reject or ignore the supplied tenant and enforce A's identity-derived scope. If the order belongs to B, return a non-disclosing denied/not-found response according to the service contract. Do not fetch the record first and ask the model to conceal it.

## Predict the failure

A tool labeled read-only has write credentials; an MCP server changes its tool description; a repeated return request produces duplicate effects. Explain which guarantees must come from the application rather than the prompt.

## Independent work

Define a read-only order tool and expose the same bounded capability through a local MCP server. Implement your own client integration. Test malformed arguments, forbidden IDs, oversized results, an injected tool result and a timeout. Draw the host/client/server and authorization boundaries. Draft a separate proposal for a human-approved write without connecting to a real ERP.

## Required checks

1. Trace model proposal through application validation to a tool observation.
2. Distinguish tool descriptions from effective permissions.
3. Explain MCP host, client, server, resources and tools.
4. Demonstrate authorization and timeout tests outside the model.
5. Handle an unknown write outcome without blindly replaying it.

## Topic Q&A

**Q: Who executes a tool call?** A: The application, after validating arguments and authorization. **Q: Does MCP provide security automatically?** A: No; server provenance, credentials and policy still need review.

## Mini-project

Expose a read-only synthetic order lookup through a local MCP server. Test malformed input, forbidden IDs, oversized output, malicious tool results and timeout handling.

## Video and reading

- Video course: [MCP: Build Rich-Context AI Apps with Anthropic](https://learn.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic). Focus on the protocol and client/server responsibilities; sign-in may be required.
- Primary reading: [MCP documentation](https://modelcontextprotocol.io/docs/getting-started/intro). Check the current specification before implementation.

## Summary

### English

The model proposes actions; the application authorizes and executes them. MCP standardizes integration, while credentials, policy, idempotency and bounded execution control the real effects.

### Hinglish

Model tool call suggest karta hai; actual permission aur execution application decide karti hai. MCP connection standard deta hai, security apne aap nahi. Har action ka scope aur retry behavior clear rakho.
