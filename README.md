# AA2 Despliegues
Amazon Elastic Kubernetes Service (EKS)

Forma impertiva: escrita en la linea de comandos
Forma descriptiva: escrita en archivos yaml

```
kubectl run <nombrePod> --image=nginx
kubectl get all
kubectl get all -o wide
kubectl get pods -o wide
```
Aplicar un pod de forma declarativa
```
kubectl apply -f 1pod1cont.yaml
```
Desmontar un pod
```
kubectl delete -f 1pod1cont.yaml
ó
kubectl delete pod <PodName>
```