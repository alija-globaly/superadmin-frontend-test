aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 834033184010.dkr.ecr.ap-southeast-2.amazonaws.com
echo "Removing secret for frontend namespace"
microk8s.kubectl delete secret -n frontend ecr-registry-secret
echo "Generating secret for frontend namespace"
microk8s.kubectl create secret generic ecr-registry-secret --from-file=.dockerconfigjson=$HOME/.docker/config.json --type=kubernetes.io/dockerconfigjson -n frontend
