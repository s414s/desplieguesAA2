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

## Pods
Los pods pueden tener uno o más contenedores

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

## Deployments
Los deployment son archivos declarativos donde como minimo tienen 4 partes
-   Como se llama la api
-   El tipo de objeto que voy a lanzar
-   El nombre
-   Las especificaciones

un deployment hace mucho más que lanzar un pod

Aplicar un deployment
```
kubectl apply -f <nombreDelYaml>.yaml
```

## Services
Para poder sacar los pods al exterior hace falta lanzar services