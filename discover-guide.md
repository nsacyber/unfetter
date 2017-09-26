---
title: Unfetter Discover Guide
layout: front-page
permalink: discover-guide.html
---

<div class=row>
    <div class="col-sm-12">
Welcome to the Unfetter Discover web application user guide. This guide is divided into three sections.  Assessment Dashboard shows how security professionals can assess their current network environments, and visualize their gaps and high-risk areas.  Intrusion Set Dashboard describes how Threat Reports can look at similarities and differences between Intrusion Sets and Threat Actors, and determine proper mitigations.  Settings shows how to enter data into Unfetter.

## Overview
The intial splash screen makes it easy to jump to any 
![Unfetter Main](https://iadgov.github.io/unfetter/images/main-screen.png){:width="700px"}

The Unfetter Discover homepage contains links to a few of its major components:
* Assessments - Contains surveys to about indicators or analytics, courses of actions or mitigations, and sensors in your network
* Intrusion Set Dashboard - Contains a graphical representation of the different intrusion sets and what attack patterns they use, and the corresponding Critical Security Controls that address such attacks
* Settings - Provides ways to manage all the data that Unfetter uses.

## Assess my Network
Out of the box, Unfetter uses the MITRE ATT&CK framework to describe the technical tactics and techniques of Intrusion Sets and Threat Actors.  Unfetter takes that ATT&CK Framework and maps Mitigations or Controls, Sensors, and Analytics to those specific ATT&CK techniques.  The Unfetter Assessment Dashboard helps users understand the gaps and risks in their own environment, by assessing their Sensors, Security Controls, or Analytics.  They will, in turn, identify which ATT&CK techniques they are most at risk.


Clicking the Assessments link at the top of the page brings you to the Assessments display page

![Unfetter Main](https://iadgov.github.io/unfetter/images/assessments.png){:width="700px"}

When you first start Unfetter Discover, three assessments have already been created.  First, look at the Assessment Summary page by clicking the ![Summary](images/assessment-summary-icon.png) icon for the "Mitigations Assessment Demonstration".

![Assessment Summary](https://iadgov.github.io/unfetter/images/assessment-summary.png){:width="700px"}

This summary provides you an overview of provides an overview of your assessment.  The "Assessment Report Overview" gives you a high-level risk score, and identifies the items you identified as the highest risk.

The charts themselves show you related ATT&CK data or your Mitigations, Sensors, or Indicators and how you scored them.  

Returning to the Assessments List page above (https://localhost/#/assessments), let's see how you create a new assessment.  The Assessment Create buttons ![Assessment Create](https://iadgov.github.io/unfetter/images/assessment-create-buttons.png) let you create an assessment based on Mitigations, Indicators/Analytics or Sensors.  The Mitigations, Indicators, and Sensors have to already be loaded into Unfetter, we will talk about that later.

Clicking the Assess Mitigations button brings you to the Assessment Creation page.
![Assessment Create](https://iadgov.github.io/unfetter/images/assessment-create.png){:width="700px"}

For Mitigations, there are four questions for each Mitigation.  Answer the questions and clicking next takes you to the next group of questions.  The number of Mitigations, Sensors or Indicators is depended on what is loaded into Unfetter.  At the end of the assessment, you will see a screen to enter a title and description.  Clicking save will save the whole assessment.

![Assessment Create](https://iadgov.github.io/unfetter/images/assessment-create-finish.png){:width="700px"}


Returning to the Assessments List page above, click the text "Mitigations Assessment Demonstration" to see the Assessment Dashboard.

![Assessment Dashboard](https://iadgov.github.io/unfetter/images/assessment-dashboard-overview.png){:width="700px"}

This screen shows you the scored risk to MITRE ATT&CK tactics based on your answers to the summary.  The left-hand column, called the "Kill Chain Phase", shows the ratio of ATTACK Patterns scored for all of the Kill Chain.  For instance, in Collection, there were only Mitigations to cover 3 of the 9 total ATTACK Patterns.  

The Risk Level Column is a high-level rollup Risk for all the scored attack patterns in that Kill Chain.

The Risk Breakdown shows the Risk PER question type.

The pie graphs on the left-hand side provide a graphical representation of the Risk values.

Let's click the "collection" link in the leftmost column, which will expand the Collection Kill Chain into all the specific MITRE ATT&CK Patterns.

![Assessment Dashboard Details](https://iadgov.github.io/unfetter/images/assessment-dashboard-detail.png){:width="700px"}

The leftmost column has stayed the same.  The middle column shows all the ATTACK Patterns that are part of the Collection kill chain.  The group under "Phase Collection" is those that have related Mitigations that were assessed.  Those under "unassessed attack patterns" do not have Mitigations.

The rightmost column describes the details of a particular ATTACK Pattern.  Clicking anything in the middle column will give you the details in the right column. The right column shows the details of the Attack Pattern including its assessed Risk level and the list of Mitigations related to that Attack Pattern. 

You can add new Mitigations, indicators and sensors to the system, and the assessment, by clicking the large yellow + button.  You can also edit each of the risk levels for the Mitigations by clicking the Edit link below the Mitigations.

## Intrusion Set Dashboard
The Intrusion Set Dashboard is designed to show which MITRE ATT&CK Patterns are used by certain intrusion sets, so you can see what is similar or different in their tactical approaches.  The Intrusion Set Dashboard's goal is to explore how you would mitigate or detect the kinds of attacking techniques that certain Intrusion Sets employ.

The Intrusion Set Dashboard lists all of the intrusion sets that are in the Unfetter Discover system, and their associated Attack Patterns.  The Intrusion Set Dashboard allows users to select one or more Intrusion Sets to see what Attack Patterns they have reportedly used.  

![Assessment Dashboard Details](https://iadgov.github.io/unfetter/images/intrusion-set-dashboard.png){:width="700px"}

Selecting up to 5 Intrusion Sets on the left will display, in the columns of boxes, which attack patterns they have reported on using.  At the top page, there is a link to the "Critical Security Controls (CSC)".  Clicking this will show the Mitigations that will mitigate the Attack Patterns that these Intrusion Sets have used.

## Entering in the Data
Unfetter Discover's backend system exchanges data from the [STIX 2.0](https://oasis-open.github.io/cti-documentation/) language.  Unfetter Discover attempts to implement the STIX 2.0 data objects as closely as possible, adding to them only when necessary.  At the top of Unfetter Discover, there is a menu for STIX.

![STIX Menu](https://iadgov.github.io/unfetter/images/stix-menu.png){:width="700px"}

From there, any of the STIX Data that Unfetter Discover uses can be manipulated.  Out of the box, Unfetter Discover employs a small amount of data to get started.  You will want to add your own.

Selecting Indicators from the menu will let you add, edit or delete all the Indicators

![STIX Menu](https://iadgov.github.io/unfetter/images/indicator-list.png){:width="700px"}

A new Indicator can be created by clicking on the New button.  Clicking the title of each Indicator will bring you to the indicator display page.

![STIX Menu](https://iadgov.github.io/unfetter/images/indicator-display.png){:width="700px"}.

The Edit button will allow you to Edit the Indicator, changing any value, selecting new kill chains, and adding new external references.

![STIX Menu](https://iadgov.github.io/unfetter/images/indicator-edit.png){:width="700px"}.

All STIX data can be changed using these screens.

</div></div>