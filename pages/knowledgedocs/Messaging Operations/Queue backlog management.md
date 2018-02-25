---
title: Managing the Queue Backlog
level1: Documents
level2: Data
level3: Messaging Operations
readtime: "1 min"
level-order: 1
order: 1
permalink: managing-the-queue-backlog.html
summary: "When long queues build up, whether overnight or during an outage, consumers often become unavailable once they have sent a message."
authorname: "Lital Haham"
authortitle: "Product Expert in Data and Operations"
tags: ['#operationalefficiency','#optimization']
---

When an agent is eventually able to reply, smart capacity will still wait for a predefined interval before reducing the intensity of the conversation. This means the agent is kept waiting in vain for the consumer's response.

To avoid this scenario, if an agent responds to the last consumer message after a preconfigured interval (with a default value of 2 hours), then the conversation will automatically be assigned a low intensity value. This will free up the agent's capacity for additional conversations, and help to reduce the queue accumulation more rapidly.

<div class="note">Please contact your LivePerson account team if you would like to enable this feature.</div>

The following example demonstrates how the queue backlog is managed:

* Time after agent sends message before system considers there to be a backlog: 2 hours

* Time after agent response to a backlog message before smart capacity allocates another conversation to them: 10 seconds

* Agent configured capacity: 3 conversations

**Backlog management flow:**

1. Conversations 1, 2, 3, 4 and 5 begin

2. At least two hours pass without an agent response to the conversations

3. Agent logs in and changes state to Online

4. Agent accepts conversations 1, 2 and 3 (meaning they are at maximum capacity)

5. Agent replies to conversation 1, which is immediately assigned a low intensity value by smart capacity

6. After 10-12 seconds, conversation 4 is allocated to the agent
