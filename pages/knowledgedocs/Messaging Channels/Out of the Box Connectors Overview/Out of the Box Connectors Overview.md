---
title: Out of the Box Connectors
level1: Documents
level2: Data
level3: Messaging Channels
readtime: "6 min"
level-order: 1
order: 1
permalink: introducing-the-out-of-the-box-connectors.html
summary: "For brands, creating a presence on the channels used by their consumers is key to building connections and creating prospects. "
authorname: "Or Garmolin"
authortitle: "Product Expert in Messaging Channels"
tags: ['#facebook', '#textmessaging', '#guides']
---

Our out-of-the-box connectors allow brands to easily integrate third party entry points, allowing them to manage conversations at scale with all the digital tools that LiveEngage offers.

LiveEngage connectors include:

1.	Facebook connector

2.	SMS connector (Twilio)

### Benefits

* Quickly get on board with messaging by plugging in these connectors with easy and low-cost deployment.

* Manage your Facebook and SMS conversations at scale with LiveEngage contact center tools.

* Give your consumers the ability to contact your brand from the channels they use the most.

* Centralize agents, tools, and reports for SMS messages with other in-app or website messaging

* Track operations in real time and report on volumes and effectiveness

### The Out-of-the-Box Connectors

#### Facebook

The LiveEngage Facebook out-of-the-box connector enables brands to connect their Facebook business pages to LiveEngage, allowing them to manage Facebook Messenger conversations with LiveEngage’s powerful digital contact center capabilities.
The Facebook out-of-the-box connector was built to allow simplicity for brands who are looking to manage Facebook conversations at scale.

Using Facebook APIs, LivePerson has created a gateway to transfer messages between consumers on Facebook and brands with a Facebook business page presence. This gateway allows them to manage, monitor and report on their Facebook conversations with LiveEngage.

The diagram below demonstrates the flow from the Facebook user, through the Facebook server and to the LivePerson Gateway Messaging Service at which point the messages are routed to your brand’s agents that are using the LiveEngage agent workspace.

![Connectors Facebook Flow](img/ConnectorsFacebookFlow.png)

1. Consumer starts conversation in the available Facebook channels.

2. Facebook platform renders conversation to consumer and stores transcript.

3. Using the Facebook APIs, the LivePerson Unified Messaging Service validates the format, authorize requests from Facebook and delivers the Facebook message to the Agent Workspace.

4. The Agent Workspace allows the brand’s agents to manage Facebook conversations at scale.

5. The transcripts are stored in LivePerson’s data storage for 13 months.

#### SMS

The SMS out-of-the-box connector enables brands to handle large volumes of consumer messages coming in through several SMS entry points. The LivePerson gateway uses Twilio APIs to connect your brand to a SMS enabled number, which will allow your customers to directly connect to you using their local SMS application.

Note: A new Twilio number can be purchased and localized to your country of business or set to adjust to other countries as well. Likewise, if your brand already uses a Twilio, you can utilize this number to enable a connector.

LiveEngage SMS messaging runs through contact center operations optimized for the messaging experience. Tailored workspaces have been created for agents and managers, along with a reporting dashboard to keep track of performance metrics.

Brands can utilize multiple entry points that enable their consumers to reach their favorite brand via SMS. This includes entry points such as Google AdWords Click-to-Message, IVR deflection, proactive engagements, offsite engagements and more.

The diagram below demonstrates the flow from the SMS user, through the Twilio platform and to the LivePerson Messaging Gateway Service at which point the messages are routed to your brand’s agents that are using the LiveEngage agent workspace.


![Connectors Twilio SMS Flow](img/ConnectorsTwilioSMS.png)

1. Consumer Initiates a text conversation from any SMS app.

2. Twilio platform renders messages between consumers and brand and stores transcript.

3. Using the Twilio API, LivePerson’s messaging gateway validates the format, authorize requests from Twilio and delivers the SMS message to the Agent Workspace.

4. The Agent Workspace allows the brand’s agents to manage SMS conversations at scale.

5. The transcripts are stored in LivePerson’s data storage for 13 months.

### Security

LivePerson invests heavily in providing the most secure platform possible for our services, customers, and their data. The integration of any third party API, requires the appropriate risk assessment and due-diligence processes. This section outlines the high-level security model and controls that have been implemented in LivePerson’s connectors.

**Protecting Data in transit and at rest**

LivePerson facilitates communication channels between the consumer device and the LivePerson backend, and between the LiveEngage Agent Workspace and the LivePerson backend. In addition, the communication with the 3rd parties (Facebook and Twilio) is encrypted from LivePerson servers to the third parties.

The data sent to the LivePerson backend is decrypted, saved to the secure database, and encrypted again before being sent to the other party. The Messaging Gateway also authorizes requests from Facebook (i.e. ensures that it’s from Facebook and not from another origin). Any communication between the services to LivePerson is using TLS1.2.

Customer data will be stored on LivePerson servers using security controls The customer can chose to enable encryption for data at rest on LivePerson servers. On the 3rd parties, Data will be stored according to third party policy (Facebook and Twilio).

For more information on Twilio’s security policy, see the Twilio Security Whitepaper: https://s3.amazonaws.com/ahoy-assets.twilio.com/Whitepapers/Twilio_Whitepaper_Security-Architecture.pdf

For more information on Facebook’s security policy, please see Facebook’s data policy: https://www.facebook.com/policy.php.


#### Optimizing operations with out-of-the-box connectors
LiveEngage includes a suite of tools to operationalize the contact center and the use of out-of-the-box connectors. With our tools such as the manager workspace, agent workspace and in depth reporting and analytics, brands can manage their messaging program effectively at scale all in one platform. Brands will benefit from centralizing agents, tools, and reports for messaging with SMS and Facebook.

Please reach out to your LivePerson representative today to start your journey with the LiveEngage Connectors.
