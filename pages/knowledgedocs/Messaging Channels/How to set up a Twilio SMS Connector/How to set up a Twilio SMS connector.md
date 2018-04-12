---
title: Setting up a Twilio SMS Connector
subtitle:
readtime: "3 min"
permalink: setting-up-a-twilio-sms-connector.html
summary: "For brands, creating a presence on the channels used by their consumers is key to building connections and creating prospects."
authorname: "Or Garmolin"
authortitle: "Product Expert in Messaging Channels"
---
<div style="display: block; position: relative; max-width: 100%;"><div class="iframecontainer"><iframe src="https://player.vimeo.com/video/238919599" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>

Our self serve on-boarding process for the SMS connector means brands can quickly and easily add this channel to their operations.

To set up a basic SMS account using Twilio, complete the following steps:

1. Create your own Twilio account [here](https://www.twilio.com/try-twilio)
![imagelink](img/Twiliostep1.png)

2. Purchase a new number to connect to your account. Select the country appropriate for your consumer base and search for available numbers. It is also possible to choose from a certain location or search for a number with a particular set of digits. Select a number from the options provided to purchase.

  <div class="note">Note: You must select a number with SMS capabilities.</div>
![imagelink](img/Twiliostep2.png)
![imagelink](img/Twiliostep2.1.png)

{:start="3"}
3. Give your number a name by clicking the ‘setup’ button. This is particularly important if you have multiple numbers attached to your account and need to differentiate between them.

4. Upgrade from your trial account and purchase credits.![imagelink](img/Twiliostep4.png)
5. Configure the request URL, by navigating to the following page: https://www.twilio.com/user/account/phone-numbers/incoming
![imagelink](img/Twiliostep5.png)

{:start="6"}
6. Click on the red hyperlinked phone number you have just purchased, and add the relevant link for your location with your account number inserted, as below.
  * EMEA accounts: https://lo.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio
  * North America accounts: https://va.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio
  * APAC accounts: https://sy.msg-gw.liveperson.net/api/ACCOUNT#/default/twilio

  ![imagelink](img/Twiliostep6.png)

7. Navigate to the following [page](https://www.twilio.com/user/account/settings) to access the Primary Authorization Token and SID. The SID will be displayed; to access the token, click on the padlock symbol.
![imagelink](img/Twiliostep7.png)

{:start="8"}
8. In LiveEngage, on the Campaigns page, click on Data Sources in the footnote.

9. On the conversation sources tab, click on Connect in the Twilio SMS box.

10. Toggle the Activate Twilio SMS Source to enabled.

11. Under Twilio account configuration, enter the following details from your Twilio account:
SID
Auth Token
Phone number

12. Click Save.

<div class="note">Note: Brands are able to connect multiple Twilio SMS numbers to their account and route each number to a separate skill. If you have more than one SMS number attached to your account and you would like to route them to separate skills, please contact your LivePerson administrator.</div>

To deactivate the SMS connector:

1. On LiveEngage, on the Campaigns page, click on Data Sources in the footnote.
2. On the conversation sources tab, toggle the SMS connector off to deactivate this connector.
