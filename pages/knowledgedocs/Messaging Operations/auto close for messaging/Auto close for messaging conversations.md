---
title: Auto Close for Messaging Conversations
level1: Documents
level2: Data
level3: Messaging Operations
readtime: "2 min"
level-order: 1
order: 1
permalink: auto-close-for-messaging-conversations.html
summary: "To help agents manage their active connections list effectively, brands are able to configure conversations to automatically close after they have been inactive for a pre configured amount of time."
authorname: "Sarah Danby"
authortitle: "Product Communications Expert"
tags: ['#data','#reporting', '#managers', '#admins']
---

To help agents manage their active connections list effectively, brands are able to configure conversations to automatically close after they have been inactive for a pre configured amount of time. Auto close provides a seamless experience for consumers; they will not receive an exit survey, nor see a separator within the conversation thread.

For example, if a conversation has been idle for ten days, it can be automatically closed and moved to the closed conversations list. If the consumer sends a message after this time, it will be treated as a new incoming conversation.  

![image alt text](img/autoclose.png)

**Notes:**

* Brands can configure auto close for any time period between one hour and 90 days; the default setting is 90 days.

* A conversation will only auto close if it is pending a consumer response; for conversations pending an agent response, auto close will not apply.

* By default a conversation where the agent has set a manual response time will not be auto closed. This logic can be disabled in the backend by your LivePerson account team.

* Auto close is scheduled to run at 25 minute intervals, meaning that inactive conversations will be automatically closed up to 25 minutes after their inactivity threshold was reached. For example, if the configured period of inactivity is 2 hours and a conversation was last active at 1pm, the conversation will be auto closed between 3 and 3:25pm.  

* Auto close is supported on web messaging and on mobile from SDK 2.1 and above.

**How to configure auto close**

1. Click the **Night Vision** button at the top of the screen. ![image alt text](nightvision.png)

2. Under *Response time*, click **Edit**.

3. The *Response time* window opens. To configure auto close, adjust the configured time as required. Time units are available in minutes, hours and days.

4. Click **Save**.
