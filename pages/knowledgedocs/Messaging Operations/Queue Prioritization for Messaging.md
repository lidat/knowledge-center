---
title: Queue Prioritization for Messaging
level1: Documents
level2: Messaging Operations
level3:
readtime: "5 min"
level-order: 1
order: 1
permalink: queue-prioritization-for-messaging.html
root-link: true
summary: "Rank conversations in the queue by a variety of parameters to provide a more rapid service to consumers."
authorname: "Lital Haham"
authortitle: "Product Expert in Data and Operations"
tags: ['#bestpractices', '#queueprioritization', '#intent', '#routing', '#support']
---
### What is queue prioritization

Queue prioritization ensures that conversations will be prioritized in the queue according to a range of parameters, including their importance, response time and likelihood to respond.

The configured response time is assigned to each conversation as it enters the queue and is used to rank the conversations in order and send them on to an agent. The response time can be configured as explained in the [Configuring response times for messaging conversations](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=configuring-response-times) article.

Note: The configured response time differs from the actual response time displayed in the Open Connections tab, which is calculated from the time the consumer wrote a message.

While in queue, the conversation's response time can be updated by setting a conversation as urgent.

### Actionable conversations first

In addition to prioritization based on configured response time, the *actionable conversations first* feature means that conversations awaiting an agent response (i.e., actionable conversations) are given a higher priority in the queue over conversations awaiting a consumer response (i.e., non actionable conversations).

This means that consumers waiting for an agent to reply will have their query addressed more rapidly. Non-actionable conversations will only leave the queue once all actionable conversations have been assigned.

A conversation is considered as actionable when it meets one or more of the following criteria:

1. Consumer sent a message

2. During transfer (when the conversation is waiting in the queue following an agent transfer)

3. A manual response time was set for the conversation by the agent

While *actionable conversations first* is applied by default, brands are still able to configure whether or not conversations with a manual response time or during transfer are considered ‘actionable’ and are therefore pending an agent’s response. Please contact your LivePerson account team if you would like to configure whether or not these types of conversations are considered ‘actionable’.

### Use Cases

The following examples demonstrate how the queue is prioritized:

#### Scenario 1:

All conversations have the same configured response time

1. Conversations are initiated by consumers in the order conversation 1, conversation 2 and conversation 3

2. Agent logs in and agent state changes to Online

 *Prioritization ordering: conversations are routed to the agent and accepted in the order conversation 1, conversation 2 and conversation 3, based on their response time assigned when they first entered the queue.*

3. Agent responds to conversation 1

4. Agent state changes to Away or Offline

5. Conversations are returned to the queue by the agent in the order conversation 1, conversation 2, conversation 3

6. Agent state changes to Online

*Prioritization ordering: conversations are **routed to the agent and **accepted **in the order conversation 2, conversation 3, conversation 1, as conversations 2 and 3 are still awaiting an agent response (are actionable) and therefore have a higher priority (and conversation 2 was returned to the queue before conversation 3). Conversation 1 is now awaiting a consumer response (and is non-actionable).*

7. Agent responds to conversations 2 and 3

8. Agent state changes to Away

9. Conversations are returned to the queue in the order conversation 1, conversation 2 and conversation 3

10. Conversation 4 begins

11. Agent state changes to Online

*Prioritization ordering: conversations are routed to the agent and accepted in the order conversation4, conversation 1, conversation 2, conversation 3, as conversation 4 is awaiting an agent response (is actionable) and therefore has a higher priority, while conversations 1-3 are all awaiting a consumer response (are non-actionable).*

#### Scenario 2:

All conversations have the same configured response time

1. Conversations are initiated by consumers in the order conversation 1, conversation 2 and conversation 3

2. Agent logs in and agent state changes to Online

3. Agent responds to conversations 1 and 2

4. Agent state changes to Away

5. Conversations are returned to the queue in the order conversation 1, conversation 2 and conversation 3

6. Consumer 2 answers and after 2 minutes consumer 1 answers

7. Agent state changes to Online

*Prioritization ordering: conversations are routed to the agent and accepted in the order **conversation 1, conversation 2 and conversation 3, as when the agent went offline they were all returned to the queue and reassigned the same response time. While conversations 1 and 2 then became actionable as a result of consumer response, the time they responded while in the queue does not affect their ordering in relation to other actionable conversations.*

#### Scenario 3:

Default response time - 15 minutes

Urgent response time - 5 minutes

1. Conversations are initiated by consumers in the order conversation 1, conversation 2 and conversation 3

2. Agent logs in and agent state changes to Online

3. Agent responds to conversation 1

4. Consumer 3 marks the conversation as urgent

5. 1 minute later, the agent state changes to Away

6. Conversations are returned to the queue in the order conversation 1, conversation 2 and conversation 3

7. Agent state changes to Online

*Prioritization ordering: conversations are **routed to the agent and accepted in the order conversation 3, conversation 2 and conversation 1, as the configured response time for conversation 3, marked as urgent, is shorter than for both conversations 1 and 2, which have default configured response time. It therefore gets priority over conversations 1 and 2 in the queue.*
