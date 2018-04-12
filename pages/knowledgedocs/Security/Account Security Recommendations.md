---
title: Securing Your LiveEngage Account
subtitle:
readtime: "4 min"
permalink: securing-your-liveengage-account.html
summary: "In order for the online marketplace to thrive, businesses and consumers alike need to be assured that their sensitive data is well protected."
authorname: "Rotem Abir"
authortitle: "Expert in Enterprise Security"
---

LivePerson offers a secure, reliable and trusted service and platform through which online businesses can safely communicate with their customers. We recommend a baseline level of protection on your account to ensure the utmost security of your data. This baseline can be achieved by activating the four key steps detailed below.

<div class="note">Note: To implement these settings, or to receive further information on LivePerson security options, please contact your Account Manager or LivePerson Technical Support.</div>

### Step 1: Set Your Password Policy

The password policy settings provide more flexibility to define policies that match your corporate security requirements. Password policies enhance your system security by forcing users to create more complex passwords, or to change their passwords at regular intervals.


| Setting        | Description  | LivePerson Recommendations  |  How to Enable |
| ------------- |-------------| -----|-------|
| Minimum number of characters     | The minimum number of characters allowed for a password. | LiveEngage enforces a minimum number of 8 characters. |   Contact LivePerson |
| Maximum sequential characters | The maximum number of characters with numerically or alphabetically ascending or descending character codes that can be used in consecutive order in the password. |   Set the value to 4. | Contact LivePerson  |
| Maximum occurrences of same character | The maximum number of times that the same character can be used in a password.     |  Set the value to 4. | Contact LivePerson|
| Character type | Alpha character required: Defines whether the password must contain an alphabetic character. Number character required: Defines whether the password must contain a number character. Special character required: Defines whether the password must contain at least one character that is commonly referred to as a special character. Any of the following characters can be used as a special character: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { &#124; } ~. |   Enforce the use of at least two out of the three options mentioned above, for example, Alpha character required + Number character required, or Alpha character required + Special character, etc.| Contact LivePerson |
| Allow username in password | Enables users to enter passwords that are the same as or include the username.  |    Disable | Contact LivePerson |
| Restrict commonly used password phrases | Restricts passwords that include commonly used password phrases.      |    Enable| Contact LivePerson |
| Expire after number of days | Forces users to change their passwords at regular intervals.     |    Change users’ passwords at least once every 90 days. | Contact LivePerson |
| Prevent using previous number of passwords | The number of previous passwords which the system will prohibit the user from reusing as a new password.     |    Set the value to a minimum of 12. | Contact LivePerson |
| Maximum changes per day | The number of times the password can be changed within a single 24-hour period.     |   Set the value to a maximum of 3. | Contact LivePerson |
| Apply policy to current passwords | Applies these rules to existing passwords. If this option is not selected, the password rules will only apply when a user changes the password, or a new user is added to the system.  |  Enable | Contact LivePerson |

For further information on LivePerson’s Password Policy, see [Login Policy](https://kb.liveperson.com/portal/app/portlets/results/viewsolution.jsp?solutionid=150526035608476&isguest=true).


### Step 2: Restrict Your Login Options

LivePerson offers the following settings for restricting login options:


| Setting        | Description  | LivePerson Recommendations  |  How to Enable |
| ------------- |-------------| -----|-------|
| Failed login policy     | Number of consecutive failed login attempts after which the system will automatically and immediately disable that user's account. The account will remain disabled until either an administrator manually enables the account, or the specified number of minutes has passed from when the account was initially disabled. | Set the number of failed logins value to 10, and the number of minutes before enabling value to 30. |   Contact LivePerson |
| Reset Password Policy      | When a password is reset through the Secure Password Reset feature, a notification email is sent indicating the login name of the user and the date and time that the password was changed.       |   Add the administrator’s email address. | Contact LivePerson  |
| Auto-disable Agent Policy | Any agent that has not logged into LiveEngage within the number of days specified will be automatically disabled.     |    Set this value to 60 | Contact LivePerson|
| Idle User Policy | Monitors user activity in the Agent Workspace and will, after a predetermined period of inactivity, log the user out of LiveEngage.     |    Log the user out of the Agent Workspace after 15 minutes of inactivity. | In the Users tab footnote, select the third dropdown menu. Select the required period of inactivity before a user is logged out. This setting can be activated by an administrator only.  |
| IP restriction policy | Restricts login access to the Agent Workspace, providing enhanced security and control. Login access is restricted to a specified list of IP addresses. If the user's IP address does not belong to the IP address list, then the user will not be able to log in and a message is displayed.      |    Enable | Contact LivePerson  |

For further information on LivePerson’s login options, see [Login Policy](https://kb.liveperson.com/portal/app/portlets/results/viewsolution.jsp?solutionid=150526035608476&isguest=true).

### Step 3: Mark Your Sensitive data

LivePerson offers the ability to remove sensitive data patterns from the chat transcripts prior to storing the transcript in the LivePerson database:

| Setting        | Description  | LivePerson Recommendations  |  How to Enable |
| ------------- |-------------| -----|-------|
|Data Masking |Identifies specific sensitive data patterns and removes them from the chat transcripts, prior to storing the transcript in the database. The masking is based on a RegEx mechanism that identifies the sensitive pattern and replaces it with asterisks (*). By using the data masking capability, sensitive data is not stored on LivePerson’s database servers. | Enable - Mask at least credit card data information.| Contact LivePerson |


### Step 4: Encrypt Your Data

LivePerson offers the ability to store chat transcripts and other session variables in an encrypted format in the LivePerson database:

| Setting        | Description  | LivePerson Recommendations  |  How to Enable |
| ------------- |-------------| -----|-------|
|Data Encryption |Chat transcripts and other session variables can be stored on the LivePerson DB servers in an encrypted format. *Note: When encryption is enabled, the following data analytics capabilities malfunction*: <ul> <li>Hot topics</li> <li>LiveEngage reporting <ul> <li>Structured Content</li> <li> Voice Deflection </li> </ul> | Enable| Contact LivePerson |
