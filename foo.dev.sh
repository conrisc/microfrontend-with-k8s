#!/bin/sh

exec kubectl apply -f .k8s/foo.service.dev.yml

exec kubectl apply -f .k8s/bar.deployment.yml
exec kubectl apply -f .k8s/bar.service.prod.yml
exec kubectl apply -f .k8s/nginx.deployment.yml
exec kubectl apply -f .k8s/nginx.service.yml


