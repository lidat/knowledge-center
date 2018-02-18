---
title: In-app Messaging FAQs
level1: Documents
level2: Data
level3: Getting Started with Messaging
readtime: "6 min"
level-order: 1
order: 1
permalink: in-app-messaging-faqs.html
summary: "LivePerson is here to help you get started with In-app Messaging at scale for your contact center operations"
authorname: "Ariel Ornstein"
authortitle: "Product Expert, In-app Messaging SDK"
tags: ['#bestpractices','#inappmessaging']
---

Check out our FAQs when it comes to the use of In-app messaging within LiveEngage. For the latest technical documentation, please visit our [developer community](https://developers.liveperson.com/index.html).

### Configuring Messaging

**Q: How is LiveEngage messaging deployed on my app?**

**A:** The app owner integrates an SDK and uses its APIs to interface with the app. This creates a seamless and integrated experience for end-users. The SDK communicates with LiveEngage in the background and facilitates a continuous conversation, in which agents are using the LiveEngage web interface to interact with consumers. The SDK and documentation can be found in our[ developer community](https://developers.liveperson.com/products-channels-inapp-messaging.html).


**Q: Is there a test environment to explore the set-up before implementing the program?**

**A:**  LivePerson can provide sample apps (iOS + Android) which can be used for code samples and to explore our features. In order to get the sample apps, please contact your account team.


**Q: Can the look and feel of the conversation window be customized?**

**A:** Each messaging client can configure the product to their own individual specifications. Brands can customize the conversation window to match their own branding and customize it to their desired messaging experience. For more details, see the customizable attributes for [iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html) and [android](https://developers.liveperson.com/android-attributes.html).


**Q: Will the SDK affect my app’s performance?**

**A:** The SDK footprint is very low in terms of memory and CPU usage. While the messaging feature is in the foreground, the SDK consumes and processes data (depending on usage) in order to sync with the servers. After leaving the conversation screen, the SDK actively disconnects any redundant networking activity.

**Q: How does the integration of messaging impact app size?**

**A:**Android utilizes approximately 2MB with external required dependencies. iOS utilizes approximately 4MB.


**Q: How much usage data does messaging expend?**

**A:** A typical conversation with a length of 12 back-and-forth messages will expend 40KB of download and 5KB of upload data (not including shared photos or files).


**Q:What’s the difference between Brand ID and App ID?**

**A:** The Brand ID is the LiveEngage account number. The App ID is the ID of a specific app. This information is defined in the Data Sources area within the LiveEngage UI. Both parameters are needed while implementing the SDK. Make sure to use the correct parameter when asked.

**Q: Can the SDK integrate into the app’s push notifications?**

**A:** Yes, the SDK can send push notifications. Please refer to the following guides for additional information and instructions**:**

* iOS push notifications [configuration guide](https://developers.liveperson.com/consumer-experience-ios-sdk-pushnotifications.html#configuring-push-notifications).

* Android  push notifications [configuration guide](https://developers.liveperson.com/android-push-notifications.html#configuring-push-notifcations).

**Q: How does the SDK ensure that sensitive information is transmitted to consumers securely?**

**A:**  Security is an integral part of the software development processes at LivePerson. To protect the privacy of both consumers and the brand, the LiveEngage messaging SDK was designed with the strictest security measures.

For more details, please refer to the detailed [Messaging Platform Security Overview](/LiveEngage-Messaging-Platform-Security-Overview.html).


**Q: Does the consumer have to initiate the first conversation?**

**A:** Yes. In order to start a connection a consumer must initiate the first message.  Once a connection is established, the agent can resume the conversation at any time.


**Q: Are automated messages available?**

**A:** Yes. Brands can configure automatic messages that display to consumers during a conversation based on different triggers and actions.  For more info, refer to [automatic messages guide](/automatic-messages.html).


**Q:What visitor information can LiveEngage messaging track?**

**A:** Starting with our In-app Messaging SDK v3.1 (March 2018), brands can use LivePerson’s Monitoring API. This API allows brands to report events related to consumers actions in the brand’s app. These reporting events will feed into the campaigns to allow you to control messaging behaviours in the app directly from the LiveEngage UI.


**Q: Can a consumer initiate a conversation if they have not been authenticated?**

**A:**  Currently, the in-app messaging SDK supports only authenticated conversations. Un authenticated in-app messaging is scheduled  be supported starting at SDK v3.2 (release date TBD).


**Q: What is the maximum supported message length a consumer or an agent can send? Can these limits be configured?**

**A:**Limits for message length cannot be configured. The maximum supported length of messages on our available channels are as follows:

* Web, in-app (SDK): 2000 characters for agent or consumer messages

* SMS: 1600 characters for agent or consumer messages

* Facebook: 640 characters  for an agent message and 5000 characters for a Facebook user message



### Customer Experience Configurations


**Q: For how long can a customer access the history of a conversation?**

**A:** By default consumers can load upto 13 months of conversations history. (starting with SDK v3.1) Each brand can choose which conversations to present to the consumer in the conversation window by date and\or by status.  


**Q:How does the communication work?**

**A :**Brands customize and deploy LiveEngage messaging SDK within their app and choose where to add the CTA. When consumers initiate a conversation, they are notified exactly when an agent will respond. Consumers can initiate a conversation anytime. For authenticated customers, LiveEngage oAuth2 services verify the consumer’s identity and securely pass Personally Identifiable Information (PII) to LiveEngage. Agents receive messages directly through the LiveEngage Agent Workspace and launch a connection from there.


**Q:Can brands control the circumstances in which the messaging button is available for consumers based on active open conversations in queue?**

**A:** The SDK does not control the availability of UI elements inside the brand’s app. The brand needs to decide when to present engagement buttons.


**Q: Can agents automatically mark conversations as "Resolved" without notifying the consumer of the conversation’s status?**

**A:** The customer survey can be disabled, but the "Message has been closed." notification will still appear in the consumer’s messaging window.  The consumer can resume the conversation at any time by simply sending their agent a new message.



### Functionality - Agents and Managers


**Q: Do agents need to install software on their computers?**

**A:** No installation or plug-ins are required as the LiveEngage Platform is HTML/JavaScript-based. For more information and on system requirements and supported browsers, refer to LiveEngage [System Requirements](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf).


**Q: What reports are available?**

**A:**Real-time data is available in LiveEngage, both for agent and agent manager, containing only relevant information to the role. Agent managers see metrics relevant to their role on an additional, configurable dashboard. In the near future, messaging will have a separate customizable History Dashboard which will include operational data reports. Until the dashboard is released, the LivePerson analytics team can provides data daily or ad hoc in either excel or .pdf format.

**Q: What aspects of customer history are tracked?**

**A:**LiveEngage tracks all customer conversation transcripts. Tracked information includes the customer’s name, device type and source origin (Facebook, app, web). In the case that the customer has passed along any personal data (such as their email or phone number), that information is displayed as well. CSAT score is included and appended directly to the relevant conversation. In the API that will be available in a beta phase by the end of Aug you will be able to retrieve the conversations with all the above customer data.


**Q: Can agents take messaging conversations and live chats at the same time?**

**A:**We strongly recommend using dedicated agents for messaging.  Operationally, messaging is a unique entity.  Jumping between live chats and messaging can be confusing and can result in a higher risk of consumers (both live chats and messaging) having a poor experience. Additionally, the agent capacity mechanism is not integrated - meaning the agents can reach capacity on both live chats and messaging at the same time - causing unrealistic amounts of load for the agents.  


**Q: Can different agents be set up to take different numbers of messages?**

**A:** Agents’ permissions can be configured to take a maximum number of concurrent messages on an agent-by-agent basis, e.g. new agents may be configured to take a lower number of concurrent messages than more experienced agents. There is no technical limitation to the number of concurrent messages an agent can take. Concurrent message allowances are configurable in the *Users* area of the LiveEngage platform.


**Q: Can agents mark conversations as "Resolved" if a consumer doesn't respond in a certain amount of time?**

**A:** Yes. Current practice is to manually resolve the conversation at a set period of time determined by contact center policies. The Auto close feature of LiveEngage enables brands to determine the exact length of time with no customer response that will trigger an automatic closing of a conversation.  Consult with your Account Reps on what is the right auto close time for your account.


**Q: Can messaging transfer live chats to other skills, even though those other skills are web chats and not continuous?**

**A:** We do not offer this capability in order to create a less overwhelming environment for agents, as well as promote more engaged and personal connections between agents and consumers. To protect this relationship, we recommend having separate live chat and messaging agents to benefit both the consumer and the agent. Predefined content will be shorter and agents will undergo training to work within a conversation that does not have a session time limit.



### Platform


**Q: Is the communication secure?**

**A:** Security is an integral part of the software development processes at LivePerson. To protect the privacy of both consumers and the brand, the LiveEngage messaging SDK was designed with the strictest security measures.

The following features are implemented as part of the solution:

* LivePerson utilizes the oAuth 2.0 and gets access as a 3rd party to the customer’s personal information. This process begins by accepting a unique and secure customer identifier from the app, relaying it (through the SDK when using app messaging) to the LivePerson backend and decrypting it to allow the agent access to the enclosed personal information. There is no need to expose the customer’s login credentials.

* The entire messaging conversation is available only inside the authenticated area and only after receiving an updated token from the brand’s server confirming successful login. This ensures that only the consumer can view the conversation with the brand.

* The entire communication is delivered on top of secured https and wss connections.

* Push notifications can be masked, or configured to exclude the actual message, and instead present only an indication that a new message is available to the consumer’s secure mailbox. This ensures that the data is available only to the consumer. Similarly, masking can be configured to hide inputted credit card numbers provided by the consumer from the agent, the consumer, or both.


**Q:Where is the information stored?**

**A:**In both iOS and Android, data generated by the LivePerson SDK and stored on the

User’s mobile device. The encryption is based on 256bit AES. Transcripts and other session variables are stored on the LivePerson DB as well.

**Q: For how long are transcripts stored?**

**A:**Transcript data is stored in data centers in the US, EU, and APAC for 13 months. During this time, the transcripts can be accessed through the agent Workspace. There is also an option to download the transcripts to TXT or XML format. After 13 months, transcripts are purged from the database.


**Q: Will LivePerson server downtime affect app function?**

**A:** LiveEngage application server downtime will have no effect on the experience of the consumers on your app or website.


**Q: What are the supported operating systems and browsers?**

**A:**Refer to [LiveEngage System Requirements](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf) for information on supported operating systems and browsers.


**Q: Where is LivePerson hosted?**

**A :**LivePerson’s US servers are located at an Equinix data center in Virginia for primary hosting, and at Digital Realty Trust in Oakland for secondary backup. LivePerson’s EU servers are located at an Equinix data center in London, UK, for primary hosting, and at an Equinix Data Center in Amsterdam, Netherlands for secondary backup. LivePerson’s APAC servers are located in Sydney, Australia, for primary hosting, and in Melbourne, Australia, for secondary backup.


**Q: How many interactions is the LivePerson infrastructure capable of handling?**

**A:** The LiveEngage infrastructure handles many different types of interactions. We are constantly upgrading it to meet the demands of new customers, and the growing demands of existing customers who are constantly expanding their partnership with LivePerson. Our infrastructure currently tracks around 2.5 billion consumers globally per month, and facilitates more than 27 million interactions globally per month.


**Q: Does LivePerson have redundant backup?**

**A:**For a summary of the redundancy plan for key components of the LivePerson architecture, and the potential impact on our customers in the event of system failure, refer to the[ Production Overview](https://kb.liveperson.com/portal/app/portlets/results/viewsolution.jsp?solutionid=140811084608438&isguest=true). Refer to[ LiveEngage Architecture](https://kb.liveperson.com/portal/app/portlets/results/viewsolution.jsp?solutionid=150526034125289&isguest=true) for further information.
