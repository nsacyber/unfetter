---
title: STIX 2.0 Design
layout: front-page
permalink: stix.html
---


The <a href="https://github.com/unfetter-discover/unfetter" target="_blank">Unfetter Discover</a> project is built on the <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cti-stix" target="_blank">OASIS Open Standard</a> called <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cti-stix" target="_blank">STIX</a>. STIX is a standardized language for representing structure cyber threat information. Unfetter Discover is prototyping the new <a href="https://github.com/STIXProject/specifications/wiki/Work-Product:-STIX-2.0-Specification" target="_blank">STIX 2.0</a> specification that is still in Release Candidate.

STIX 2.0 was picked over the approved standard version 1.2.1 because STIX 2.0 uses JSON for its data representation rather than XML. This technology fits nicely with the NodeJS based software stack in Unfetter Discover. Intending to just represent some of the data in STIX, the team eventually decided to implement all of Unfetter Discover's backend and REST interfaces fully compliant with the STIX 2.0 schema.</p>

<a href="https://github.com/iadgov/unfetter-discover/tree/v0.1.1" target="_blank">Release 0.1</a> of Unfetter Discover was a large monolithic program built on a <a href="https://www.vagrantup.com" target="_blank">Vagrant</a> provisioned Virtual Machine. However, it became clear that the STIX 2.0 backend should be available to anyone wanting to store and retrieve STIX 2.0 data their own applications. Release 0.2 of Unfetter Discover is being rearchitected to support microservices model using <a href="http://www.docker.com/" target="_blank">Docker</a> containers. All Unfetter Docker containers are available on the <a href="https://hub.docker.com/r/unfetter/" target="_blank">Unfetter organization on Docker Hub</a>. The STIX 2.0 microservices containers and software can be found on the GitHub repository <a href="https://github.com/iadgov/cti-stix-services" target="_blank">cti-stix-services</a>. The different containers in this repository are described below.
