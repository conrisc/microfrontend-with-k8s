#!/bin/sh

docker image build -t foo-team:1.0 ./foo-team
docker image build -t bar-team:1.0 ./bar-team
docker image build -t my-nginx:1.0 ./nginx
sleep 5
