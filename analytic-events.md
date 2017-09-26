
Unfetter Analytic uses a Windows VM to generate interesting events such as process creation, user logins, and network connections.The events are shipped to the Unfetter Analytic server, Logstash is used to ingest them into Elasticsearch, and then Apache Spark is used to run an analytic that generates new events (generally either alerts or items for situational awareness).

Below is an example process to generate an event that will trigger an alert in the Windows VM.

Interact with the Windows VM Graphical User Interface (GUI) and start Powershell as administrator. Run the Powershell command to clear the security event logs: <strong>PS C:\Windows\System32> Clear-EventLog -Logname Security</strong>

To see the events in Elasticsearch you can use either Kibana or the lighter weight Elasticsearch-head plugin. From the browser in your host OS, go to Kibana: <strong> https://localhost</strong> Another option is to use the Elasticsearch-head plugin. Click on the "Browser" tab on the following page:

The results of the analytics are also visible in Unfetter-Discover at <strong>https://localhost/cti-stix-ui/sightings</strong>. <strong>https://localhost/elasticsearch/_plugin/head</strong> Events from the Windows Event Log, as well as Sysmon events, should begin to populate Elasticsearch and be viewable via Kibana or Elasticsearch-head. 

Create new analytics by putthing them in the <strong>unfetter-analytic/unfetter-analytic/analytic-system/src</strong> directory.  A quick ls shows a number of Python files with names similar to CAR_2016_04_002.py. Each of these files is a separate analytic that you can read about in CAR. You can also look at the file itself using a text editor like emacs, vim, or nano.  Create a new analytic.  Then, edit the run.sh file to run the new analytic in the loop.  Stop the docker containers, and rerun them <strong>docker-compose up</strong>.

Restarting the containers will pull the new run.sh file and start running them.


The es_helper.py helps set up and interact with Elasticsearch.

The main program is run_unfetter_analytic.py. This Python program will call the CAR analytic Python code you specify. Hereis a simple example: <strong>spark-submit run_unfetter_analytic.py -c CAR_2016_04_002.py -d day 1 -p</strong>

This command will use spark-submit to run the "run_unfetter_analytic.py" program, which will load and execute CAR analytic CAR_2016_04_002 and will look through the last 24 hours of events.  It will push any alerts to Elasticsearch and also Unfetter-Discover.

After printing the Unfetter banner, run_unfetter_analytic will display the CAR name, number, and description. This will generate a number of alerts once it completes.

The alert should now appear in Kibana. Adjusting the time interval in the upper right-hand corner may be necessary.
