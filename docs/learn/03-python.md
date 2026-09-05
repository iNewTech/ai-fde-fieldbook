# 03. Production Python for a Node.js engineer

Week 2 | Prerequisite: 02 | Output: P1 typed, tested order adapter

## The enterprise problem

You have a reliable Node.js order API. The AI service needs a Python adapter that fetches several order summaries without blocking unrelated requests or overwhelming the upstream ERP.

## First principles

Transfer the behavior you already understand before memorizing syntax. Python dictionaries and lists roughly cover familiar object/map and array use cases, but equality, mutability and missing values differ. `None` is not JavaScript's separate `null` and `undefined`. A function's default argument is evaluated when the function is defined: a mutable default list can accidentally persist across requests. Explicit ownership of mutable state matters in services.

Type annotations describe expectations; they do not automatically validate incoming JSON. Validate at a boundary using a schema such as Pydantic, then pass a well-defined internal type. Decide whether coercion is acceptable: an account ID that looks numeric may contain leading zeros, so converting it to an integer can corrupt identity. Keep decimal money out of binary floating-point arithmetic when exact amounts are required.

Like Node.js, async execution does not make blocking work harmless. Awaiting a network operation can yield control. Calling a synchronous database driver in the event-loop thread can prevent other requests from progressing. Bound concurrency, apply a request deadline and propagate cancellation. Offloading blocking work also needs a bound; unlimited threads merely move the overload.

Exceptions define failure behavior. Separate invalid input, upstream unavailability and programming defects. A context manager provides deterministic cleanup for connections or files. Do not catch every exception and return an empty order list: that makes an outage look like a legitimate empty business result. Structured logs need event names, request IDs and redacted metadata.

## Trace an example

Six upstream calls each take 200ms. Serial execution takes roughly 1,200ms before overhead. A concurrency limit of three permits two waves, roughly 400ms if calls are equally fast. If the ERP permits only two calls, the faster local setting may create rate-limit retries and make the real result worse. Measure, and test the maximum in-flight count with a fake client.

## Predict the failure

One call never returns. A broad exception handler swallows cancellation. A shared default dictionary leaks request state. Explain how each can pass a single happy-path test while failing under load.

## Independent work

Implement the skeleton in `projects/01-python-bridge/`. Preserve input order, handle duplicate IDs consistently, bound concurrency and return explicit per-item outcomes. Use fake I/O and no paid API. Add a schema boundary and structured log design after the core contract passes. Write a short Node.js-to-Python comparison for async execution, exceptions, context managers and type validation.

## Required checks

1. Explain type hints versus runtime validation.
2. Diagnose a blocking call inside `async def`.
3. Pass empty-input, order-preservation, duplicate, timeout and concurrency tests.
4. Explain cancellation propagation and resource cleanup.
5. Defend a money and identifier representation for ERP data.

## Topic Q&A

**Q: Do type hints validate request JSON?** A: No, runtime validation at the boundary is still required. **Q: Does `async def` make blocking I/O safe?** A: No, a blocking driver can stall the event loop.

## Mini-project

Build a Python adapter around a fake IBM i order API. Add typed input validation, bounded concurrency, timeouts and tests for duplicates, cancellation and upstream failure.

## Video and reading

- Video lectures: [CS50 Python: Unit Tests](https://cs50.harvard.edu/python/weeks/5/) and [Object-Oriented Programming](https://cs50.harvard.edu/python/weeks/8/). Use selected sections to translate familiar concepts.
- Primary reading: [Python asyncio](https://docs.python.org/3/library/asyncio.html) and [Pydantic concepts](https://docs.pydantic.dev/latest/concepts/models/).

## Summary

### English

Production Python needs explicit data boundaries, bounded concurrency and observable failure behavior. Familiar async syntax does not remove blocking, cancellation or shared-state risks.

### Hinglish

Python syntax jaldi aa jayegi, par production behavior prove karna zaroori hai. Input validate karo, concurrency limit rakho, cancellation samjho aur error ko empty result bana kar mat chhupao.
