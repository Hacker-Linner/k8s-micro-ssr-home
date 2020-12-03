# MICRO-SSR-HOME

### Docker Image

```sh
docker build -t micro-ssr-home:1.0.0 .  --no-cache
docker tag micro-ssr-home:1.0.0 hackerlinner/micro-ssr-home:1.0.0

docker run -it -p 3001:3001 hackerlinner/micro-ssr-home:1.0.0
```