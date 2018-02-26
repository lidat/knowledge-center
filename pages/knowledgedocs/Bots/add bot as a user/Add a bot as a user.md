---
title: Bots as LiveEngage Users
level1: Documents
level2: Data
level3: Bots
readtime: "3 min"
level-order: 1
order: 1
permalink: bots-as-liveengage-users.html
summary: "A bot agent is a bot that acts as an agent / agent manager with all the relevant permissions. It can also be tracked and managed in the same way as any other human agent. To enable automation, the bot user will be able to login automatically."
authorname: "Sarah Danby"
authortitle: "Product Communications Expert"
tags: ['#agents','#openplatform']
---


<div style="display: block; position: relative; max-width: 100%;"><div class="iframecontainer"><iframe src="https://player.vimeo.com/video/238898218" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>


Our mission is to open the LiveEngage platform to as many bot integrations as possible. To do so, we need to ensure we are providing operational management and efficiency for bots as agents.

A bot agent is a bot that acts as an agent / agent manager with all the relevant permissions. It can also be tracked and managed in the same way as any other human agent. To enable automation, the bot user will be able to login automatically.

The bot should reflect your brand image and voice; we recommend spending some time creating a bot persona that matches your brand personality, including the avatar, name and content of automatic responses.

Before adding the bot as a user, you will first need to **create a skill to be used only by the bot**. This will enable LiveEngage to route conversations appropriately and is also critical for reporting and analysis.

**To create a skill:**

1. Click on the users tab.

2. Click on Skills to view the Skills list.

3. Click **Add Skill**.

4. The Add skill dialog box will open.

5. Name the new skill and type in a description.

<div class="note">Note: the name given to the skill should be clear and easy to track, for example ‘routing-bot’.</div>

{:start="6"}
6. Click **Save**.

For further information, refer to the [Skills documentation](https://ce-sr.s3.amazonaws.com/CA/Admin/skills/29_Skills.pdf).

Next, **create a bot type user**. The bot user can be configured with roles and permissions, in the same way as a human agent, and its performance will be tracked and reflected in reporting by LiveEngage.

Firstly, **contact your LivePerson account team** to enable this feature for you.

**To create a bot type user:**

1. First, contact your LivePerson account team to enable bot type users on your account.

2. In the users tab, click on ‘new user’.

3. In the *User type* dropdown select **Bot**.

4. Select the avatar and name for your bot.

![image alt text](img/adduser.png)

{:start="5"}
5. In the *login method* dropdown menu, select **API key** then use the **Select/Generate API key** dropdown to either select an existing key, if already created, or to create a new one.

![image alt text](img/adduserapikey.png)


{:start="6"}
6. Assign the bot an ‘agent’ profile. Select the relevant skill (see ‘To create a skill’ above) and agent group.

7. Set the maximum number of messaging conversations.

8. Click **Save**.

<div class="note">Note: You must have admin or campaign manager permissions in order to create a bot type user.</div>
