#!/bin/sh

exec docker image build -t foo-team:1.0 ./foo-team
exec docker image build -t bar-team:1.0 ./bar-team
exec docker image build -t my-nginx:1.0 ./nginx