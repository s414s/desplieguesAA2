docker run --rm -d -p 3000:3000 asalasher/nodeforaa2:v1
 docker run --rm -d -p 8080:8080 asalasher/goforaa2:v1

kubectl apply -f AA2-deployment.yaml

kubectl apply -f AA2-svc.yml
kubectl get all -o wide

kubectl delete -f aa2-deployment.yaml
kubectl delete -f AA2-svc.yml

# AA2 Despliegues
Amazon Elastic Kubernetes Service (EKS)

Forma impertiva: escrita en la linea de comandos
Forma descriptiva: escrita en archivos yaml

```
kubectl run <nombrePod> --image=nginx
kubectl get all
kubectl get all -o wide
kubectl get pods -o wide

kubectl get nodes
```

Se lanza primero los pods y luego el service para sacar los pods al exterior

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
kubectl delete pod <PodName> // esto mata un pod en particular
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
kubernetes.io/docs/concepts/workloads/
Para nosotros, el más importante de ellos es el primero: Service

Para borrar todos los yaml de una carpeta
```
kubectl delete -f .
```

## Conclusiones
Se podría concluir que se necesita:
-   archivo de deployment
-   archivo de service para exporner todo

lo importante es el nombre del selector

mirar el ejemplo de wordpress-deployment.yml porque hace junto el service y el deployment 