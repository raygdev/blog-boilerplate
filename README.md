# Blog Boilerplate

Following along with a microservices with node js and react course by Stephen Grider on [Udemy](https://www.udemy.com/course/microservices-with-node-js-and-react).

## Running the application

To run the application, docker desktop, the kubernetes cli, skaffold, and [ingress nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start) must be installed. Kubernetes must be enabled through the docker desktop. After installation, in the root directory, run
```shell
skaffold dev
```
If an unusual error or errors occur when running the previous command, try running it again. After the second time it should work normally. Running this command will spin up multiple pods, services, deployments, and containers that will communicate through an ingress controller. You can view the react application at `http://posts.com`. Note that that url is set up through hosts in the [ingress-srv.yaml](./infra/k8s/ingress-srv.yaml#L11) . You may need to change your hosts settings, on your machine, to have your machine reroute to `localhost` when visiting `posts.com`.