---
title: Routing Logic for Messaging Conversations - Skill Selection
subtitle:
readtime: "6 min"
permalink: routing-logic-for-messaging-conversations-skill-selection.html
summary: "Learn about the messaging routing engine that works behind the scenes to select the agent that will handle an incoming conversation."
authorname: "Liat Peled"
authortitle: "Product Expert in Data and Intelligence"
---


### Routing logic: skill selection overview

When a consumer is ready to start a messaging conversation with your brand, it’s important to direct them to the agent that will best serve their needs. To facilitate this, the messaging routing engine works behind the scenes to select the most appropriate agent to handle an incoming conversation from a consumer. The engine relies on a few fundamental principles:

* Choosing an agent best equipped with the right skills to help with the consumer's inquiry

* Minimizing customer wait time

* Optimizing use of the agent’s capacity

* Maintaining consumer satisfaction and building an ongoing relationship

When a consumer initiates a conversation, the routing engine carries out two key selection processes in order to assign the conversation to the most appropriate agent:

1. Skill selection - identifying the most relevant skill to help with the consumer's inquiry.

2. Agent selection - assigning the most suitable agent out of all available agents that have the selected skill to handle the conversation.

When agents are not available to handle new conversations, conversations will wait in a prioritized queue until an agent becomes available.

### Skill selection

In order to ensure consumers are routed to the most appropriate agent to handle their inquiry, incoming conversations can be assigned to different skills. The skill selection process is the first method used by the routing engine to direct the conversation to the right agent.

Using skill selection, an incoming conversation is routed exclusively to an available agent with the conversation’s assigned skill. If no skill is assigned to a conversation, and no default skill has been configured, the conversation will be routed to any available agent in the contact center. In this instance, the most appropriate agent will be chosen based on the Agent Selection process, as set out below.

Incoming conversations are automatically assigned to skills based on:

* The consumer’s authenticated profile - the routing engine will evaluate the consumer’s engagement attributes, extracted during the authentication process, and assign the conversation to a relevant skill.

* The default setting - a default skill can be assigned to incoming messaging conversations when no skill is configured by their engagement attributes.

* The agent’s state - if no agents with the conversation’s skill are online, the conversation can be routed to a fallback skill.

LivePerson Consulting Services can configure automatic skill selection; self-service configuration will be available at a later date. [Further information on Skills](https://ce-sr.s3.amazonaws.com/CA/Admin/skills/29_Skills.pdf).

#### Skill selection based on consumer profile

As part of the authentication flow, the authentication server can provide information on the consumer’s authenticated engagement attributes (SDEs). Engagement attributes are layers of information about a consumer that are recorded throughout their consumer journey. These attributes can be used for skill selection (and will also be presented to the assigned Agent once they receive the incoming conversation); the relationship between attributes and skill can be configured by LivePerson Consulting Services. Read more about [engagement attributes](https://ce-sr.s3.amazonaws.com/CA/Campaigns/Engagement%20Attributes%20Overview.pdf) and [authentication](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Authenticated+Interactions+with+oAuth+2.0.pdf).

The following engagement attributes are currently supported for skill selection:

*  customer info ("ctmrinfo") attributes:

* Customer type ("ctype")

* Company branch ("companyBranch")

Once a conversation is initiated, the routing engine will receive a skill notification based on the consumer profile identified during the authentication process. The system will then route the conversation to an appropriate agent assigned to that skill.

#### Default skill

It is possible to configure a default skill which will be used in case no skill mapping rules matched the consumer’s profile during the authentication process.

In the example below, if a consumer has the engagement attributes customer type = VIP and company branch = US, the conversation will be routed to the VIP_Care_English skill. If the consumer has the engagement attribute company branch = PR, then it will be routed to the Genral_Care_Spanish skill. If the consumer does not have any engagement attributes that meet a mapping rule, then it will be routed to the default skill, which in this case is General_Care.

![mapping of skills](img/mapped-skill.png)

#### Offline routing to a fallback skill

By default, when no agents are available to accept an incoming conversation, the conversation will wait in the queue for the assigned skilled until an agent becomes available. To help avoid this situation, it is possible to configure a fallback skill. This enables incoming conversations to be deferred to a second ‘fallback’ skill when there are no online agents with the conversation’s assigned skill. This method can only be used when there are agents online with the fallback skill; if no agents for this skill are online, the conversation will remain in the queue for the assigned skill.

Fallback skill configuration is particularly useful when different skills in the contact center have different working hours. For example:

* Skill "VIP_Care_English" is available on weekdays between 9am and 7pm.

* Skill "General_Care" is available 24/7 and is configured as a fallback skill.

* During "VIP_Care_English" off hours (7pm until 9am and weekends) no agents are logged in with that skill. New conversations will be assigned to the “General_Care” skill (fallback) and will be routed to available agents instead of waiting in the “VIP_Care_English” skill’s queue.

Note: Fallback logic only applies to new incoming conversations until they are first assigned to an agent. It does not apply after the agent selects 'back to queue' or ‘transfer to skill’.

#### Transfer to skill

Even after a conversation has been assigned to an agent, the agent still has the ability to transfer the conversation to a different skill that is better suited to handle the consumer's inquiry. In this case, the conversation will be rerouted to an available agent with the selected skill or wait in the select skill’s queue if there are no available agents.

![agent-selection](img/agent-selection.png)
