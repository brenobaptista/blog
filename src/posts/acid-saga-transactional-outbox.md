---
title: 'ACID, Saga and Transactional Outbox'
description: 'Patterns for maintaining data consistency across microservices.'
date: '2026-01-04'
---

## ACID

- Atomicity — All or nothing. You use `BEGIN TRANSACTION` and run some operations. At the end, if everything succeeds you `COMMIT`, if something fails you `ROLLBACK`.

- Consistency — Rules are always respected. You define a constraint like `balance >= 0`. If any transaction tries to break that rule, the database rejects it automatically.

- Isolation — Transactions don't interfere. Two people try to buy the last concert ticket at the same time. Only one succeeds, while the other sees "sold out".

- Durability — Committed means permanent. You run `COMMIT` and get a success response. Even if the server crashes right after, when it restarts the data is still there.

ACID works well when everything lives in one database. But in a microservices architecture, each service typically owns its own database. That's where the following patterns come in.

## Saga

[Saga pattern](https://microservices.io/patterns/data/saga.html) can be implemented to manage transactions between microservices, allowing them to stay in sync without relying on a single database transaction.

Each service completes its part independently and then triggers the next step. If something goes wrong, each previous step is reversed through a compensating transaction.

- Choreography-Based Saga — Services listen for events and react accordingly. When a step completes, it publishes an event to a known next service.

- Orchestration-Based Saga — An orchestrator controls the flow. Services respond to its commands rather than communicating directly. Often implemented using a state machine.

## Transactional Outbox

Sagas depend on services reliably publishing events. If you save data to the database and then send a message to a queue, a failure in the messaging step won't roll back the database write.

Use this pattern to reliably update the database and publish events together in an atomic way.

1. Create a new table that will act as the outbox.

2. Instead of publishing directly, save the data and the event to the outbox table in a single transaction.

3. Set up a separate process that reads the outbox table and publishes the events.

4. After publishing the event, mark the outbox record as processed (consider keeping records for audit purposes).

Note that you get "at least once" delivery, meaning messages might be sent more than once in case the publisher crashes after sending but before marking as processed.

Consumers should be idempotent: processing the same message twice should have the same effect as once. A common approach is to include a unique ID in the message for tracking duplicates.
