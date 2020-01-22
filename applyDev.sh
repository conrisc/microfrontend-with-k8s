#!/bin/sh

kubectl apply -f .k8s/dev
kubectl apply -f .k8s/
sleep 5
