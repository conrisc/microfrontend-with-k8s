#!/bin/sh

exec kubectl apply -f .k8s/dev
exec kubectl apply -f .k8s/
