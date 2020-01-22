# Microfrontend with k8s

![DEMO](demo.jpg)

This repository contains sample web application build upon the microfrontend architecture (https://micro-frontends.org/)

There is two separate teams who can work independently on their own part of the application:
 - Foo-team
 - Bar-team
 
 ## How to build
 ### Pre-requirements
In order to deploy the app you need to have docker and kubernetes installed.
At first build 3 images using docker (execute command(s) below in the root directory of this repo):  
    `./buildImages.sh`  

 **or** (if you can't run sh)  
    `docker image build -t foo-team:1.0 ./foo-team`  
    `docker image build -t bar-team:1.0 ./bar-team`  
    `docker image build -t my-nginx:1.0 ./nginx`

 ### Production
Then just simply apply k8s configuration:  
    `./applyProd.sh`
    
**or**  
    `kubectl apply -f .k8s/prod`  
    `kubectl apply -f .k8s`

Now you should be able to reach the app on `localhost:3000`

 ### Development
The development mode creates only nginx docker container and services to reach foo-team server and bar-team server running localy.

Run this command:  
    `./applyDev.sh`
    
**or**  
    `kubectl apply -f .k8s/dev`  
    `kubectl apply -f .k8s`

Then go to foo-team and bar-team directories and execute `npm start` in each of them. (Node required)

Now you should have one container with nginx which is able to reach you local node servers (thanks to kuberentes services)
Making changes in foo-team directory requires restart of the foo-team's node server (respectively for the bar-team)

### Cean up
To remove kubernetes deployment run one of the following commands:  
    `./deleteK8s.sh`  
**or**  
    `kubectl delete -f .k8s -R`

Then remove docker images using:  
    `./removeImages.sh`  
**or**  
    `docker image rm foo-team:1.0`  
    `docker image rm bar-team:1.0`  
    `docker image rm my-nginx:1.0`