
#!/bin/sh

exec kubectl apply -f .k8s/prod
exec kubectl apply -f .k8s/