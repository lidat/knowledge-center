---
title: Best Practices for Messaging with SMS
subtitle:
readtime: "3 min"
permalink: best-practices-for-messaging-with-sms.html
summary: "Combining the power and scale of LiveEngage with the accessibility and popularity of SMS means that your brand can access the millions of consumer ready to connect via SMS messaging."
authorname: "James Brown"
authortitle: "Senior Expert in Digital Transformation"
---

We want to give your brand a quick look at some of the best practices that we recommend when implementing SMS with LiveEngage. The journey to digital and smart operations can be made easier with the following tips.

### Preventing Network Filtering for Outbound and IVR entry-points

Brands in North America will need to purchase short-codes instead of regular long-code phone numbers if sending outbound SMS from an IVR or partner tool.  This is to prevent 'Carrier Filtering' (a process in which networks block long-code numbers if they are used as an outbound channel for 200 or more messages a day).

### Friendly Names / Vanity Short Codes
Friendly names such as '1(800) New Home' and vanity short codes such as 'Realty' are not ideal for SMS since most handsets do not display the 10-digit keypad when setting the recipient of a text message.  The consumer instead sees a regular keyboard so we suggest that brands use and advertize regular format numbers.

### Re-purposing Existing Numbers
It is possible to take an existing 1(800) number or other business number and 'port' the SMS capabilities across to Twilio so that it can be connected to your LiveEngage account.  However, we recommend that you first look at your telephony reports and logs for that number and determine the following:

1.	Are text messages are already being sent to this number?
2.	What are the types of messages being sent?

You should especially do this if these messages are not being answered as many brands start text-enabling a number that has been published for years, only to find that it receives a high volume of junk or spam messages. This should be evaluated case by case as it may be more practical and efficient to purchase a dedicated number.

### Different Numbers for Skill Routing
LiveEngage offers the ability to route SMS messages sent to different phone numbers to their own individual skill.  Numbers can map one to one (one number routes to one skill) or many to one (many numbers route to one skill).  Number to skill routing can be used not only to deliver the right messages to the right agents but is also key when evaluating the impact and success of different entry-points. You will be able to know how a consumer was targeted by the number that they text.

### Conversation Security and Consumer Authentication
To help you navigate challenges regarding encryption and consumer authentication, and to minimize risk to your brand and your consumers, our Technical Services team are able to partner with you to build a custom ID&V widget to suit your needs.  The ID&V widget allows agents to send a single use form to the consumer with questions such as, "Provide the second and fourth digit of your security passcode and the fourth and fifth letter of your mother’s maiden name."

While ID&V does not physically secure the conversation or authenticate the consumer, it does enable the agent to confirm the consumer's identity without requesting or recording any sensitive information in the body of the conversation transcript.  

To find out more about ID&V and how you can leverage it to enhance and extend your use-cases, please contact your account team.

### Data Masking

While the LiveEngage custom ID&V solution provides a means for exchanging such data securely, it doesn't prevent consumers from unintentionally sharing such data in the body of their conversation.  The LiveEngage integration with the Twilio framework provides a solution: there are Twilio functions which can be used to mask sensitive data from the conversation. Click here to learn more about enhancing SMS with Twilio.

### System Messages

Business requirements for many brands include the ability to send automated responses to consumers for a variety of reasons:
1.	TCPA compliance agreement
2.	Off-hours notifications
3.	Expectation setting for SLAs (first time consumers), and more.

Although system messages are not yet available as features within LiveEngage, all of the above can be achieved with Twilio functions. Click [here](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Messaging/Enhancing+SMS+experience+with+Twilio+Functions.pdf) to learn more about enhancing SMS with Twilio.
