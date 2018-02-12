---
title: Routing Logic for Messaging Conversations - Agent Selection
level1: Documents
level2: Data
level3: Messaging Operations
readtime: "5 min"
level-order: 1
order: 1
permalink: routing-logic-for-messaging-conversations-agent-selection.html
root-link: true

summary: "Learn about the messaging routing engine that works behind the scenes to select the agent that will handle an incoming conversation. This includes an overview of the agent selection process."
authorname: "Liat Peled"
authortitle: "Product Expert in Data and Intelligence"
tags: ['#messaging", "#routing']
---


### Routing logic: Agent selection overview

Following the skill selection process, the routing engine will initiate the agent selection process. This involves identifying all available agents with the relevant skill to handle the conversation, and selecting, from those available, the most suitable agent to handle the incoming conversation. The agent’s suitability is determined using a set of parameters as set out below. Once the most appropriate agent is identified, the engine will route the incoming conversation to that agent.

#### Agent availability

An agent is considered available to receive an incoming conversation, when the following criteria are met:

* The agent is logged in and ‘online’; No new incoming conversations will be routed to an agent whose state is set to ‘away’ or ‘back soon’.

![status setting](online-status-setting.png)

* The agent has enough capacity to receive an incoming conversation.
LiveEngage supports two modes of agent capacity management, which determine an agent’s capacity to receive incoming conversations:

 1. Smart capacity - this algorithm identifies agent availability by calculating the frequency rate of messages or ‘message intensity’ within each conversation. This method ensures that the agent’s capacity is adjusted based on their actual availability, rather than concurrency. This method requires configuration by LivePerson Consulting Services. [Read more about smart capacity](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Messaging/Smart+capacity.pdf).

 2. Maximum concurrent conversations - this mode configures the threshold of the number of conversations an agent can handle at one time; an agent reaching the threshold will not be routed new conversations. The number of conversation slots can be configured within the Users section at the account level for all agents, as well as at an individual agent level.

Default maximum number of conversations per agent - Account level:
![account settings for conversations](settings-number-conversations.png)

Maximum number of conversations per agent - Agent level:
![account settings for conversations agent level](conversations-agent-level.png)

#### Agent selection preferences

The agent selection process is based on parameters outside those around the agent’s skill and availability. This is to ensure the optimal utilization of the agent’s capacity and even distribution of the workload, as well as maintaining high levels of customer satisfaction.

* **Agent prioritization** - when routing an incoming conversation, the system will prioritize all agents eligible to receive the conversation and will route the conversation to the most suitable prioritized agent. Prioritization is based on three key parameters:

 * the agent’s current utilization state:

   * Smart capacity - the utilization score is calculated by dividing the combined intensity of the agent’s current assigned conversations by the configured maximum slots per agent. [Read more about smart capacity](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Messaging/Smart+capacity.pdf).

   * Default - The ‘least busy’ agent is prefered - the agent that is currently handling fewer active conversations.

 * the time passed since they last received a new conversation

 * the messaging history between the agent and the consumer

* **Building an ongoing relationship** - when routing an incoming conversation from a returning consumer, the system will aim to direct it to the same agent the consumer spoke with previously. This approach helps the agent to build and maintain an ongoing and long-lasting relationship with the consumer.

 * Routing to the same agent can only be achieved if the agent is available and has the assigned skill. A returning consumer may instead be routed to a different agent if the agent is unavailable or did not accept the incoming conversation.

 * If the consumer gave the agent a low CSAT score (1-3) following the previous conversation, the system will try to route them to a new agent.
* A conversation may be routed to the low rated agent if other agents with the skill are unavailable to receive it.

* Return to queue - if an agent manually returns a conversation to the queue, the system will try to re-route it to a different available agent.

#### Queue priority

The routing engine prioritizes conversations that are waiting to be assigned to an agent according to their response time/SLA. This is the time that brands are committed to responding to their consumers within, to ensure that queue time is minimized and consumers receive a timely response. Each conversation will wait in their allocated place in the queue until they ring through to the assigned agent.

The default response time for incoming conversations is configurable by an administrator at the account level. Different response times can be configured for different types of conversations; for example, first time consumers and consumers who have indicated that their enquiry is urgent can be set to have a shorter response time.

![image alt text](image_5.png)

## Routing flow

![routing flow](routing-flow.jpg)
