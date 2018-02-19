---
title: Masking Options in the In-app SDK
level1: Documents
level2: Data
level3: Security
readtime: "4 min"
level-order: 1
order: 1
permalink: masking-options-in-the-in-app-sdk.html
root-link: true
summary: "Brands have different options when using the Messaging In-app SDK for masking sensitive information and complying with security and operational requirements."
authorname: "Liat Peled"
authortitle: "Product Expert in Data and Intelligence"
tags: ['#inappmessaging', '#bestpractices', '#openplatform']
---

### Messaging In-App SDK Overview

The Messaging in-app SDK provides different options for masking sensitive information and complying with brands’ security and operational requirements. There are three types of masking: real-time, client side and server side. The masking options are configurable from the SDK and a regular expression (REGEX) determines which patterns are detected for each one. Unlike chat, the text lines stay on the local device’s database so every detail that’s not masked locally will be visible to the user on future uses of the SDK. The user experience is detailed in this document

### Types of Masking

The in-app SDK supports 2 types of masking today. A 3rd type of support will be introduced in the future. The following table explains how each masking type works:

<table>
<thead>
 <tr>
 <th></th>
 <th>Real time masking</th>
 <th>Client side masking</th>
 <th>Server side masking
(future support)</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Masking on the app conversation screen</td>
 <td>✓</td>
 <td>✓</td>
 <td>✓</td>
 </tr>
 <tr>
 <td>Masked when saved on the device’s local database</td>
 <td>✓</td>
 <td>✓</td>
 <td>✓</td>
 </tr>
 <tr>
 <td>Masked when sending over the network</td>
 <td>✓</td>
 <td>x</td>
 <td>x</td>
 </tr>
 <tr>
 <td>Masked when shown to agents during the conversation</td>
 <td>✓</td>
 <td>x</td>
 <td>x</td>
 </tr>
 <tr>
 <td>Masked when retrieved from the engagement history</td>
 <td>✓</td>
 <td>x</td>
 <td>✓</td>
 </tr>
</tbody>
</table>


### Real-Time Masking

This type of masking is used to prevent customers from accidentally sending sensitive information to customers via plain text (regular text lines). For example, it is not allowed to send credit card information without PCI compliance. The brand may use real time masking to prevent such a text line from being sent over the network and kept in the local database.

#### Behavior:

When a customer enters a line of text consisting of a pattern that was defined on the REGEX, the masked pattern will be:

1. Replaced with asterisks on the app’s conversation screen

2. Saved as asterisks on the local device’s database

3. Sent as asterisks on the network

4. Presented as asterisks to the agent

5. Saved as asterisks on the agent’s engagement history

#### Customer side:

<img src="img/before-screenshot-client-side.png"/>

<div class="imagetext">Before Sending</div>

<img src="img/after-screenshot-client-side.png"/>

<div class="imagetext">After Sending</div>



#### Agent side:

![messaging screenshot](img/message-screenshot-0.png)

### Client Side Masking

This type of masking allows the customer to send certain kinds of information to the agent, while not maintaining it locally on the device. A typical use case is a password the customer sends to the agent during the conversation, without retaining it on the device so when an intruder user gets access to the device and scrolls up the conversation thread the password is not compromised.

Client side masking is supported only in non-authenticated SDK mode, since on authenticated the data is synced between the client and the server. Since the server side is not masked in this mode client side masking can’t be activated to prevent masked data from reappearing as unmasked on the client side.

#### Behavior:

When a customer enters a line of text consisting of a pattern that was defined on the REGEX, the masked pattern will be:

1. Replaced with asterisks on the app’s conversation screen

2. Saved as asterisks on the local device’s database

3. Sent as unmasked info on the network

4. Presented as unmasked info to the agent

5. Saved as unmasked info on the agent’s engagement history

#### Customer side:

<img src="img/before-screenshot-agent-side.png">

<div class="imagetext">Before Sending</div>

<img src="img/after-screenshot-agent-side.png">

<div class="imagetext">After Sending</div>


#### Agent side:

![messaging screenshot](img/message-sceenshot-1.png)

### SDK behavior diagram

![messaging diagram flow](img/message-flow-2.png)

### Configuration Options

* Multiple expressions can be included in a single REGEX. Please refer to online tools explaining how to create regular expressions.

* Multiple occurrences of expressions can be detected in a single line of text, so, for example, if the customer sends a sentence including more than one type of predefined expression, both will be masked.

* Configuring expressions is done on the local configuration file on the SDK. The developer may configure each type of masking (real time and/or client side) independently where precedence is given to the real time masking if set.

* Please refer to the iOS and Android SDK deployment guides for more info.
