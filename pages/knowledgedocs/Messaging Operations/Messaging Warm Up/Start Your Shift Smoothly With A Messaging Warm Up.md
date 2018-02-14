---
title: Messaging Warm Ups for Agents
level1: Documents
level2: Data
level3: Messaging Operations
readtime: "3 min"
level-order: 1
order: 1
permalink: messaging-warm-ups-for-agents.html
summary: "In order for agents to start their shifts smoothly and be able to ‘warm up’ to the flow of conversations, brands can configure LiveEngage to assign conversations to the agents gradually."
authorname: "Sarah Danby"
authortitle: "Product Communications Expert"
tags: ['#bestpractice', '#messaging']
---


When an agent first signs in they will receive one conversation. After a pre-configured time interval a second conversation will be assigned, and so on, until the agent reaches their maximum number of messaging conversations.

![imagelink](img/MessagingWarmUp.png)

To enable messaging warm up on your account, contact your LivePerson account team.

The warm up algorithm incrementally assigns the conversations to the agent in the following way:


1.	Once an agent logs in, the first conversation will be assigned to them immediately.

2.	After a predefined time interval the agent will receive the next conversation (regardless of whether they accepted the previous one or not). The predefined time interval can be configured by the brand, with a default value of 90 seconds.

3.	The warm up process continues, with conversations being assigned to the agent at the same predefined time intervals, until the number of assigned conversations reaches the agent’s max # of messaging conversations. The conversations are assigned regardless of the conversation’s weight, i.e., whether they are active or inactive).

4.	Additional conversations will be assigned based on available capacity, according to the smart capacity calculation. For further information on how smart capacity is calculated, refer to the [smart capacity documentation](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Messaging/Smart+capacity.pdf)

Messaging warm up applies from the moment an agent logs in. It is also applied if at least one hour has passed since they last received a conversation from the queue. For example, an agent logs in at 8:45 AM, receives a new incoming conversation at 9:00 AM and then logs out.

If the agent logs in again at 9:55 AM (55 minutes after last receiving a conversation), warm up does not apply.
If the agent logs in again at 10:05 AM (65 minutes after last receiving a conversation), warm up is applied.
The maximum warm up period is set by default to 20 minutes.
