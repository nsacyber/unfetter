---
title: Unfetter Analytic Setup
layout: front-page
permalink: analytic-setup.html
---

Setup PageThe Unfetter Analytic server side system is built using Docker to easily spin up containers for running each of the desired applications.  

These instructions show how to setup the Windows Victim system with Vagrant. Services will be configured and started, Windows event logs and Sysmon data will be forwarded and ingested, and Kibana dashboards will be running, analytics will run and alerts will be pushed to Unfetter-Discover.

The Unfetter Analytic system was tested on Windows 7 Professional and Windows 10 Home host operating systems (OSes) using VirtualBox. However, any OS that supports Vagrant should work, since both systems run in virtual machines (VMs).

If using Windows as your host OS we recommend you run a Bash client to interact with Vagrant, but it is not strictly necessary.

Under the main directory, there are two sub-directories: unfetter-analytic and unfetter-windows. The unfetter-analytic system contains a docker-compose.yml file for using docker-compose to create the system.  The unfetter-windows directory contains a  Vagrantfile and all the  scripts necessary to provision each system. 

When first starting each VM with <code>vagrant up</code>, Vagrant provisioning will go out and install all the software needed for each VM. No software, other than source code, is provided in the GitHub project.

# To install the prerequisites
- Install <a href="https://www.docker.com/products/overview" target="_blank">Docker</a></li>
- Install <a href="https://www.vagrantup.com/docs/installation" target="_blank">Vagrant</a></li>
- Install <a href="https://www.virtualbox.comwiki/Downloads" target="_blank">Oracle's VirtualBox</a></li>
- Install a git client and run <strong>clone github.com/unfetter-analytic/unfetter.git</strong></li>


# Starting The Server
The Unfetter Analytic Linux VM contains the ELK stack, Apache Spark, and the Python (PySpark) files that run the analytics.

The Windows VM is a Windows 7 32-bit with Microsoft Sysmon and Nxlog installed. Nxlog is already configured to send logs to Unfetter Analytic. 

There are a number of GitHub projects needed to run the Unfetter Analytic system.  They are all found under <a href="https://www.github.com/unfetter-analytic" target="_blank">www.github.com/unfetter-analytic</a>  

You can easily clone all those projects	in a couple of easy steps:
<pre><code>mkdir unfetter-analytic;cd unfetter-analytic</code></pre>
						
To clone all the projects, just use this script:
<pre><code>curl -s https://api.github.com/orgs/unfetter-analytic/repos\?per_page\=200 | perl -ne 'print "$1\n" if (/"clone_url": "([^"]+)/)' | xargs -n 1 git clone
cd ./unfetter
docker-compose up</code></pre>

In analytic-system directory, there is a file called run.sh.  Docker will run this file as the main workhorse for the analytic system. It is looping through all the analytics and running them, pushing any results to Elasticsearch AND the locally created Unfetter-Discover.  Change run.sh to perform whatever analytics you want.  
						
Wait until Docker has started. There won't be any data until the Windows system begins running and forwards events.

The running docker container "analytic-system" has the analytics.  If you want to run analytics individually, attach to this container to run them.

#Starting Windows Victim

Setting up the Windows system the first time has a few more steps than setting up the analytic server. You will need a version of Windows 7 that can be created as a box file. There are a few ways to do this, but these instructions will show you how to use <a href="https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/" target="_blank">modern.ie</a> to download an evaluation copy of Windows 7 from Microsoft.

- Go to the <a href="https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/" target="_blank">modern.ie</a> site and download an IE11 on Win7 Virtual Machine for the Vagrant platform.
- Unzip IE11.Win7.Vagrant.zip and load the box file (IE11 - Win7.box) to your host computer. The box file is a VM packaged with metadata that Vagrant uses as a starting point for your VM.
- Go to the directory where you unzipped the .box file and run the command: <strong>vagrant box add win7 'IE11 - Win7.box'</strong>
- Your Vagrant system should now have a base Windows 7 image called <i>Win7</i>
- Go to the "unfetter-windows" directory and run: <strong>vagrant up</strong>

Vagrant won't be able to complete the provisioning on its own. Manual configuration of Vagrant is necessary so that Vagrant can communicate with the guest Windows OS. When the Windows GUI starts, do the following on the VirtualBox window

Set the network location to Home or Work. Go to Control panel -> Network and Sharing Center and click on "Public network" under "View Your Active Networks" in order to change the type.
Run the following script as administrator:
<pre><code>
@echo off
set WINRM_EXEC=call %SYSTEMROOT%\System32\winrm %WINRM_EXEC% 
quickconfig -q
%WINRM_EXEC% set
winrm/config/winrs @{MaxMemoryPerShellMB="300"} 
%WINRM_EXEC% set winrm/config @{MaxTimeoutms="1800000"}
%WINRM_EXEC%
set winrm/config/client/auth @{Basic="true"}
%WINRM_EXEC% set winrm/config/service @{AllowUnencrypted="true"}
%WINRM_EXEC% set winrm/config/service/auth @{Basic="true"}

This script is located in unfetter-windows/resources/winrm.cmd on the host OS. After you change the network type in the guest OS the script will be accessible under \\VBOXSVR\vagrant\resources. Either execute it from that location or copy it and paste it into a new .cmd file on the guest OS using Notepad.

Navigate back to the window where "vagrant up" was executed. Provisioning should continue now that Vagrant can communicate with the guest OS. Vagrant will install and configure Sysmon and Nxlog. When it is all done, check the following log file for errors to make sure the Windows machine can see the analytic server: <strong>c:\Program Files\nxlog\data\nxlog.log</strong>

The VM can be accessed through the GUI. If you used Modern.ie, then the credentials are "IEUser/Passw0rd!"

It is HIGHLY recommended that if you work with Microsoft Windows, you purchase a licensed copy and build your own Vagrant box file. If you want to make your own base Windows box, this <a href="http://www.hurryupandwait.io/blog/creating-windows-base-images-for-virtualbox-and-hyper-v-using-packer-boxstarter-and-vagrant" target="_blank">webpage</a> has an example.
# Web Interfaces
Unfetter Analytic provides three interfaces to see your collected data. Kibana provides a full-featured interface to perform complex searches. You can access it at: <strong>https://localhost</strong>

The Elasticsearch head plugin provides a simple interface that allows you to browse through the collected data. It is accessible at: <strong>https://localhost/elasticsearch/_plugin/head</strong>

The Unfetter-Discover system is avilable at <strong>https://localhost/unfetter-discover</strong>
Next, learn to <a href="analytic-events.html">Generate Events</a>
