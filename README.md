Camel CBR Project
======================
By Ing. Jimmy Figueroa

This project demonstrates the Camel Content Based Router (CBR) pattern in Apache Camel, 
it takes in a call to a RESTful endpoint, passing an XML message as parameter.

A camel route inspect the inbound XML message for content (i.e. Topic), then routes
the call to either Endpoint1 or Endpoint2. Both target endpoints are NodeJS server samples.
t.skip=true clean installessage to the calling Client

To build this project use

    mvn -Dmaven.test.skip=true clean install

To run the NodeJS endpoints 1 and 2 run the following commands in separate unix terminal tabs:

    cd <root_endpoint1>
    node app.js # runs in port 3000

    cd <root_ednpoint2>
    node app.js # runs in port 4000


System requirements
-------------------

Before building and running this quick start you need:

* Maven 3.1.1 or higher
* JDK 1.7 or 1.8
* JBoss Fuse 7
* NodeJS
* Check pom.xml for JBoss Fuse dependencies needed to intall (ie. feature:install camel-http)

Build and Deploy the Sample
---------------------------

1. Copy the contents of <root>/config/serviceProperties.cf to ${karaf.home}/etc
2. Change your working directory to `camel-blueprint-cbr` directory.
3. Start JBoss Fuse 
4. In the JBoss Fuse console, enter the following command:

        osgi:install -s mvn:com.mycompany/camel-blueprint-cbr/1.0.0-SNAPSHOT
        osgi:list | grep json 

    Should yield: json-path, json-smart, camel-jsonpath 

        osgi:list | grep jackson

    Should yield: camel-jackson, jackson-databind

        osgi:list | grep jetty

    Should yield: camel-jetty

    NOTE: if some of the bundles aren't active after install, stop/start Fuse

5. Fuse should give you an id when the bundle is deployed

6. You can check that everything is ok by issuing  the command:

        osgi:list
   your bundle should be present at the end of the list

7. Check log for no errors:
        log:tail

Use the bundle
---------------------

1. As soon as the Camel route has been started, enter your unix terminal and type:

        curl -H "content-type:application/json" -X GET --data '<message><topic>workflow</topic></message>' http://localhost:8383/test

2. Inspect Endpoint2 NodeJS console, watch the call and returning JSON

3. Client should have received a JSON message back

4. Type another curl command as Client:

        curl -H "content-type:application/json" -X GET --data '<message><topic>entity</topic></message>' http://localhost:8383/test

5. Inspect Endpoint1 NodeJS console, watch the call and returning JSON

6. Client should have received a different JSON message back

Next Steps
----------

To complete the use case required, the following features will need to be added in future versions:

* ActiveMQ
* MQ persistence to a DB (ie. MySQL)
* Pass inbound JSON messages
