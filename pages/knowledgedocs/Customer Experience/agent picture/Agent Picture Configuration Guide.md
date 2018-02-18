---
title: Agent Picture Configuration Guide
level1: Documents
level2: Data
level3: Customer Experience
readtime: "5 min"
level-order: 1
order: 1
permalink: agent-picture-configuration-guide.html
summary: "Consumers begin their journey with agents by being able to see a picture of who they’re chatting with."
authorname: "Sarah Danby"
authortitle: "Product Communications Expert"
tags: ['#bestpractices','#guide', '#agents']
---

**Make the conversation more personal by configuring the agent’s picture to display in the engagement window.**

Consumers begin their meaningful connection with agents by being able to see a picture of who they’re chatting with. This functionality can be configured through the advanced window configuration.

### Configuring agent personal picture

1. In LiveEngage, go to the ‘Users’ tab.

2. Click on the row with the relevant agent’s name to edit their information.

3. In the "Picture URL" field, add the URL of the agent’s personal picture. ![image alt text](img/edituser.png)Note: URL must be in “https” format, with recommended size of 200X200 pixels (up to 0.5MB). Supported formats are PNG, JPG, and GIF.

4. Click "Save".

### Defining agent picture appearance in the engagement window

Agent picture is defined individually per window. If you are using the same window in different engagements/ campaigns, visitors will see the agent’s picture in both of them.

In order to define the agent’s picture in the selected engagement window, follow these steps:

1. Under "Engagement window library", select the desired window.

2. Under "Engagement window studio", select “Open additional window settings”.

![image alt text](img/windowstudio.png)

{:start="3"}
3. In the "Engagement window" category, find the “Agent picture” row.

4. In the "Value" column, select “Yes” from the dropdown in order to enable Agent picture for the selected engagement window.

![image alt text](img/picturevalue.png)

{:start="5"}
5. Click Save.

Now the visitor will see their agent’s picture next to each line sent by the agent in the chat engagement window:

![image alt text](img/picturewindow.png)

<div class="note">Note: In the case that "Agent picture" is enabled for a window but the agent did not configure their picture yet, the visitor will not see any picture while chatting with this specific agent.</div>

### Configuring a default picture

In order to define a default picture to be displayed when no agent picture is defined, follow these steps:

1. Under "Engagement window library", select the desired window.

2. Under "Engagement window studio", select “Open additional window settings” .

![image alt text](img/windowsettings.png)

{:start="3"}
3. In the "Engagement window" category, locate the “Agent picture default URL” row.

4. In the "Value" column, add the URL of the default picture that will be displayed for agents who did not configure their picture.

![image alt text](img/picturevalue2.png)

{:start="5"}
5. Click "Save".

Visitors will now see the configured default picture beside each line sent by the agent with no configured personal picture.

### Limitations

* **Join conversation:** If a second agent joins the conversation for whom a default picture URL is defined, the visitor sees the default picture next to second agent’s lines.

<div class="warning">
**_Because each window is configured separately, take into account the following:_**

In the case that different default pictures are defined in different engagement windows, when an agent transfers the conversation to an agent that has no assigned picture, the default picture displayed is the default picture defined for the conversation’s original engagement window.

**This is Relevant to accounts using separate engagement windows for different departments.**
</div>
