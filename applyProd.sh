#!/bin/sh

kubectl apply -f .k8s/prod
kubectl apply -f .k8s/
sleep 5
