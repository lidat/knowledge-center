---
title: Bots FAQs
level1: Documents
level2: Data
level3: Bots
readtime: "5 min"
level-order: 1
order: 1
permalink: bots-faqs.html
summary: "Bots can be created using any bot platform and integrated into LiveEngage, so that brands can enjoy the benefits of seamless transition from bots to live humans and comprehensive reporting and tracking."
authorname: "Sarah Danby"
authortitle: "Product Communications Expert"
tags: ['#bots','#openplatform', "#bestpractices"]
---


### Configuring Bots

**Q: What is the difference between bots & virtual agents?**

**A:**  The terms virtual agent and bot are often interchangeable as they both offer contact centers similar services. A virtual agent is a contact center capability that uses a computer-generated virtual character to provide artificial intelligence as a customer service agent, via the chat or messaging functionality. A chatbot is usually focused on a single purpose and can provide answers to automated  and simple tasks. Both bots and virtual agents can be run and optimized through artificial intelligence.

LiveEngage is able to integrate to any virtual agent or bot that you or any 3rd party company creates.**  **


**Q: Are bots only consumer-facing? Are there bots for agents?**

**A:** Currently, bots acting as agents can be utilized in consumer-facing scenarios. Agent-facing AI tools, and AI solutions for operations, can be constructed using different SDKs and APIs than those used for consumer-facing bots.  


**Q What functionalities do consumer-facing bots possess? **

**A:**  Bots are able to boost your contact center operations in a variety of ways, offering one or more of the following functionalities:

* Intent analysis — evaluating the consumer’s intended journey and routing them to the most appropriate agent

* Natural language understanding — analysing the language used by the consumer to pinpoint their needs

* Conversational generation — producing natural text-based language in conversation with humans

* Choice provision — using structured content, bots can offer consumers various options for actions, enabling them to proceed through a certain journey flow more rapidly

We can help you to determine how bots can best support your customer service offering and make the greatest impact on their business.


**Q: What steps are needed to prepare the bot to plug into LiveEngage? **

**A:**  We recommend adding bots into your operations for tasks where automation suitability is high. Start by creating a list of simple processes that take the agent a lot of time and are needed frequently. Bots able to carry out these tasks can be created, or obtained from a third party.

You should also consider whether the bots will be used to provide generic information only, or whether they will need access to some of your knowledge systems in order to provide more personalized responses to consumers.  

To prepare the bot for integration with LiveEngage, it’s vital to test it against the use scenarios you have identified. Running the bot in a test environment, against transcripts from these scenarios, enables the bot’s functions to be adjusted and optimized in readiness.


**Q: How are bots integrated into LiveEngage?**

**A:**  Within LiveEngage, a bot is a type of agent and operates in almost the same way as human agents. In order to set up a bot within LiveEngage, the following 4 steps should be taken:

1. Create an agent type user within LiveEngage and give it the name of your bot. Configure the user profile, including max concurrency and permissions, as appropriate.

2. Utilize our API or SDK to automatically control the actions of the bot.

3. Contact your LivePerson rep to set up routing that will determine how your bot should pick up conversations.

4. Monitor and report bot performance in real-time with detailed and flexible reports.


**Q: What APIs are available to integrate bots into LiveEngage?**

**A:**  If you are adding bots to your live chat, our Chat Agent API is available for you to utilize. If you are adding bots to messaging (in-app messaging, web messaging, SMS or Facebook), use the Messaging Agent SDK.


**Q: What’s the difference between an API and an SDK?**

**A:**  The API is a set of methods allowing developers to call LiveEngage functions in order to fully customize and control a certain experience. An SDK is a compilation of existing methods that provides a flexible and customizable app, requiring less development than working directly with API methods.


**Q: Which bots are available for me to plug-in to LiveEngage?**

**A:** LivePerson Bot studio features and out of the box routing bot that enables you to use structured content to ask your consumers what their inquiry is about and then route the conversation to self service, another bot or the right skill for a human agent.  Externally-made bots, developed in-house by your brand or a partner, or created by a third party such as IBM Watson, can be integrated into LiveEngage.


**Q:Are bots available on all channels?**

**A:** When adding a bot to LiveEngage, it will be available to any channel that supports the type of content and formatting your bot takes on.  Bots can available on live chat, in-app messaging, web messaging, Facebook and SMS. Just like human agents, bots can handle conversations from any of these channels on LiveEngage. The built-in routing bot is available for web and in-app messaging.



 **Q: Can I use bots on SMS & Facebook?**

**A:** Bots are available on both SMS and Facebook. Conversations originating from either of these sources can be routed directly to a bot, and bots and human agents can seamlessly transfer conversations within these channels as within any other. Structured content is not currently available for Facebook or SMS.


**Q:  Is there a test environment to explore the set-up before implementing the bots?**

**A:**  Yes. We can demo and set up a test via a configurable test app for brands to use while they work on integration. For a White Label app, contact the LivePerson team.


**Q: How can I set up structured content to use in conjunction with a bot?**

**A:** Your LivePerson representative will be able to enable your account to utilize structured content and enable it within your in-app messaging SDK.  


 **Q:Is sensitive information protected when shared during a conversation with a bot****?**

**A:**  Sensitive information can be masked by the LiveEngage system, in the same way as masking is applied for certain data during conversations with human agents. Please speak to your LivePerson representative to have masking enabled for certain conversational elements.


**Q: Can I turn the bot off?**

**A:** In order to to stop the bot from functioning, brands must simply disable the bot as a user. If there are no other bots available with the bot skill, conversations will then be routed to the configured default skill instead.


**Q: What happens if the bot experiences down-time?**

**A:** If the bot goes down while a conversation is in process, the Agent Manager will need to manually transfer the conversation(s) to another agent. New messaging conversations that are waiting in queue are automatically transferred to the configured default skill if the bot experiences down-time. For live chats, consumers will be directed to the offline survey.


**Q: How are conversations routed to bots?**

**A:**   In messaging, conversations are routed to bots and bot skills via the same logic that they are routed to human agents and skills, by using engagement attributes that are passed through authentication to direct the conversation to the most appropriate and available agent.  For web-messaging, the LivePerson campaigns are used to add skill routing using an easy to use and updatable UI.



**Q: How do I integrate the bot into my CRM system?**

**A:**  The bot will need to be integrated into your CRM system directly by the team administering it.


**Q: Will the bot affect my app’s performance?**

**A:**  The bot is integrated directly into the SDK/API hosted by LiveEngage and will have no impact on the performance of your app.


**Q: How does the integration of bots impact app size?**

**A:**  The bot is integrated directly into the SDK/API hosted by LiveEngage and will have no impact on the size of your app.



**Q:How much phone usage data do bots expend?**

**A:**  Conversations with bots use the same amount of data as with a human agent.


**Q: How do bots integrate into the app’s notifications?**

**A:**  The bot is recognised in the same away as any other agent on LiveEngage. In this way, any messages or notifications sent by the bot will be treated in the same way as those from a human agent.



### Consumer experience

**Q: Is the bot conversation history available for consumers?**

**A:**  Messages from the bot are displayed in exactly the same way as messages from a human agent, both within the chat or messaging window and in the engagement or messaging history.


**Q:** **How do consumers know when they are in a conversation with a bot?**

**A:**  Any brand can customize and control the way that bots are displayed to consumers. Best practices include creating an opening line that clearly articulates a bot is typing, as well as adding an image avatar to the bot agent profile.  


**Q: What happens if the consumer does not want to speak to a bot?**

**A:  **Depending on how your bot has been built, there are two ways to escalate to a human agent:

1. The consumer can request to speak to an agent either by typing ‘agent’ or selecting from a structured content list.

2. Natural language can identify a need based on consumer frustration, lack of answers or upsell opportunity.

LiveEngage APIs listen to these escalation requests and immediately transfer the conversation to a connected human agent.


**Q: Is messaging with bots continuous?**

**A:**  Full continuity is supported when switching between in-app messaging and web messaging conversations with a bot.


### Functionality - bots as agents

**Q: How does the bot check skill availability?**

**A:** The Chat Agent API allows bots operating in live chat conversations to check for the availability of other skills.


**Q: ****How is the performance of bots measured?**

**A:**  Bots log in to LiveEngage as agents, therefore their performance is tracked and measured against the same KPIs as a human agent, including their MCS and CSAT scores. By treating bots as any other agent, LiveEngage allows for analysis and optimization of bot performance, via detailed and flexible reporting.


**Q: How do you differentiate between bots and human agents?**

**A:** When creating a new user for a bot in LiveEngage, we recommend giving the user the name ‘Bot *’. The bot skill should also be named ‘Bot *’. This enables brands to quickly and easily filter transcripts, data and reports by these specific names. We also recommend creating an agent group for the bot(s).


**Q: Can agents transfer to a bot skill?**

**A:** Once configured, agents can transfer conversations to a bot skill as appropriate.


**Q:Is data derived from bots available in reporting?**

**A:**  As bots are treated as any other agent on LiveEngage, metrics related to their performance are included in all data and reporting. In addition, LiveEngage makes it easy to filter and view data specific to bots.


**Q: What is a bot’s concurrency?**

**A:**  A messaging bot’s maximum messaging concurrency is 999. This setting can be configured when a bot is set up as a user on LiveEngage. The bot may handle conversations above this maximum if smart capacity is applied and allows additional conversations to be routed to the bot. However, we do not recommend that you set up unlimited concurrency for your bots since they still escalate to humans and having too many bot instances may overload your agents.  Contact your LivePerson representative for best practices on the concurrency per type of bot.  


**Q: How do I set permissions for bots as agents?**

**A:**  Permissions can be set for bots as for any other agent.


**Q: Can bots authenticate visitors?**

**A:** Bots currently do not have the ability to authenticate a visitor. The visitor will start the conversation as authenticated or unauthenticated. However, the bot is able to ask identification questions. Text masking can be configured for sensitive information shared with the bot.


**Q: How will the bot know to differentiate between authenticated and unauthenticated consumers? **

**A:** Bots in live chat conversations are able to see when a visitor is authenticated. Visitor information, including authenticated attributes, is not currently exposed to bots in messaging conversations.
