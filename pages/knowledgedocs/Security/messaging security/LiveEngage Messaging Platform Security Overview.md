---
title: LiveEngage Messaging Platform Security Overview
level1: Documents
level2: Data
level3: Security
readtime: "6 min"
level-order: 1
order: 1
permalink: livenegage-messaging-platform-security-overview.html
summary: "As a leading provider with a large customer base and years of experience backing us, LivePerson’s new messaging solution is both secure and innovative. As veterans in the field, we understand that a heightened level of protection is especially paramount when it comes to content exchanged between brands and consumers."
authorname: "Rotem Abir"
authortitle: "Expert in Enterprise Security"
tags: ['#bestpractices','#openplatform']
---


LivePerson has developed an advanced, API and SDK-based solution to enable web and in-app mobile messaging between consumers and brands. LivePerson invests heavily in providing the most secure platform possible for our services, customers, and their data. As a leading provider with a large customer base and years of experience backing us, LivePerson’s new messaging solution is both secure and innovative. As veterans in the field, we understand that a heightened level of protection is especially paramount when it comes to content exchanged between brands and consumers. The integration of any 3rd party SDKs into a brand’s mobile application, or the integration with the API, requires the appropriate risk assessment and due-diligence processes. This document outlines the high-level security model and controls that have been implemented in LivePerson’s messaging platform.

**Supported Platforms**

LivePerson’s in-app messaging SDK applies to both iOS and Android devices.

### Secure Development Life-Cycle  

#### Security by Design

Security is an integral part of the software development processes at LivePerson. The platform and its components have gone through meticulous and stringent security design evaluations by the LivePerson Security team and R&D Architects. Additionally, LivePerson Mobile Application Developers have gone through dedicated Secure Mobile Application Development training by a leading third party that specializes in this domain.

#### Static Code Analysis

The code behind the platform has undergone repeated security scans by a static code analysis platform in order to assess potential gaps/flaws. As part of our Continuous Integration framework, LivePerson’s SDLC policy ensures that any High Risk findings are resolved prior to deployment to Production.

All data exchanged between LivePerson’s backend and the LiveEngage Workspace is validated on the server side to prevent browser side attacks, for example, Cross Site Scripting or XSS.

#### Ethical Hacking, Vulnerability Assessments and Penetration Testing

The LivePerson Unified Messaging Platform, API and SDK have been repeatedly tested by independent Penetration Testers and Ethical Hackers specializing in Mobile Application Security. In addition, a weekly vulnerability assessment is executed against the infrastructure using an industry standard scanner.

### System Components

#### Client side

| Component              | Description                                                           |
|------------------------|----------------------------------------------------------------------
| Mobile App             | Developed by the brand (not LivePerson).                             |  
| LP SDK (iOS & Android) | To be embedded in the brand’s mobile app.                            |
| LiveEngage Workspace   | Browser-based web application from which agents interact with users. |  

#### Server Side

| Component          | Description                                                                             |
|--------------------|-----------------------------------------------------------------------------------------|---|---|---|
| LivePerson backend | Responsible for the messaging service and authentication using REST and WebSocket APIs. |  


### Protecting Data in Transit

LivePerson facilitates communication channels between the consumer device and the LivePerson backend, and between the LiveEngage Workspace and the LivePerson backend. The data sent to the LivePerson backend is decrypted, saved to the secure database, and encrypted again before being sent to the other party.

All communication between the consumer device and the LivePerson backend is encrypted using 256bit AES and established over either HTTPS (for REST communication) or WSS (for data transmitted over WebSockets) using TLS1.2. In addition, requests are verified with a JSON Web Token (JWT).

### Protecting Data at Rest

In both iOS and Android, data generated by the LivePerson SDK and stored on the user’s mobile device is encrypted based on standard OS ciphers. The encryption is based on 256bit AES.

### Data Flow

LivePerson Messaging has three types of interactions and data flows:

1. Authenticated Interaction

2. Unauthenticated Interaction

3. Push Notifications

Below are detailed descriptions of all three data flows and their respective sequence diagrams.

#### Authenticated Interaction

The consumer authenticates to the brand’s application by providing his/her username and password. After authentication, the brand shares the user’s identity with LivePerson in a secure manner without exposing his/her login credentials. The consumer communicates only with the brand’s agents who immediately know the customer’s identity.

![image alt text](img/authint.png)

Fig. 1: Authenticated Interaction


For information on the process for authenticated interactions, see the  [Authentication Guide](https://developers.liveperson.com/guides-authentication-introduction.html).

#### Unauthenticated Interaction

The consumer does not authenticate to the brand application or systems. However, the consumer is still able to initiate a messaging request and communicate with a brand agent, without providing an authenticated identity.  

The process for unauthenticated interactions is as follows:

1. The consumer downloads the brand’s mobile application from the App Store or Marketplace.

2. The consumer initiates a request for an instant messaging conversation.

3. LivePerson IDP receives the request, generates a random UUID for the user, creates a LivePerson JWT, and sends it back to the consumer device.  

![image alt text](img/lpjwt.png)

Fig. 2:  Unauthenticated Interaction

The consumer establishes a secure WebSocket to LivePerson messaging. Each message or communication to messaging is sent with LivePerson JWT. Messaging verifies LivePerson JWT validity and expiration. If LivePerson JWT is expired or not verified, the socket is terminated.

#### Push Notifications

Push notifications are designed to allow an agent to reach out to a consumer with a response when the user is no longer using the conversation screen.

The process for push notifications is as follows:

1. The brand’s app generates a request for a new push token (UID) from the Apple Push Notification Service (APNS), or the Google Cloud Messaging (GCM) service.

2. The token is then provided by the brand’s app to the LivePerson SDK or directly to the API.

3. The LivePerson SDK registers (userID + APNS/GCM token) to the LivePerson Messaging backend.

4. Whenever an agent sends a message while the consumer is not using the messaging screen, a push message is sent.

5. There are two modes for sending push messages:

 1. LiveEngage sends the push message directly to APNS/GCM by sending the app’s push certificate (uploaded in advance to LivePerson by the brand), the push token and the text message.

 2. LiveEngage sends the push message to the brand’s push proxy server by sending the push token and the text message. The brand’s push proxy adds the app’s push certificate and sends the request to APNS/GCM.

![image alt text](img/pushdirect.png)

Fig. 3:  Push Notifications - direct to APNS/GCM

![image alt text](img/pushproxy.png)

Fig. 4:  Push Notifications - through the brand’s push proxy

*Note: In both push implementations the text payload can optionally be masked to always appear as a predefined message such as "You have a new message", to refrain from personal info being visible on a locked device.*

### Agent Login

Access to the LiveEngage interface requires authentication.

LivePerson provides two options for agent authentication:

* Standard Login

* SSO

#### Standard Login

Agents authenticate using a unique SiteID, Username and Password. Brands are responsible for the User Management and Login Policy settings of their account. The default Login Policy requires a minimum password length of 8 characters. Brands may opt to change the password policy, add IP-based access lists, and implement additional security settings.

#### SSO

Brands may choose to implement and enforce a SAML 2.0-based Single Sign-On.

If the SSO feature is enabled, the agents authenticate to the brand’s authentication platform. Upon successful authentication by the brand, a token (bearer) is securely provided to LiveEngage, and the agent is logged in.