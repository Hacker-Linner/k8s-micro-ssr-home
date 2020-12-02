# K8S-MICRO-SSR-HOME

### Docker Image

```sh
docker build -t k8s-micro-ssr-home:1.0.0 .  --no-cache
docker tag k8s-micro-ssr-home:1.0.0 hackerlinner/k8s-micro-ssr-home:1.0.0

docker run -it -p 3001:3001 hackerlinner/k8s-micro-ssr-home:1.0.0
```