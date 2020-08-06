# Next.js with Docker, PM2 and NGINX

This project is a production Docker setup for a Next.js app.

The Next.js app is launched with [PM2 Runtime](https://pm2.io/runtime/), which is a Production Process Manager for Node.js applications and is used to keep the app alive forever.

A second container with the [NGINX](https://www.nginx.com/) web server is used as a reverse proxy, and to handle HTTP caching.

## Docker Compose

```bash
docker-compose up

# rebuild images with
#  docker-compose up --build <nextjs | nginx>
```


NGINX listens on port 80, which is the default HTTP port, so you can just visit **http://localhost/**

## Without Docker Compose

```bash
# Build images
docker build --tag nextjs-image .
docker build --tag nginx-image ./nginx

# Create shared network
docker network create my-network

# Run containers
docker run --network my-network --name nextjs-container nextjs-image
docker run --network my-network --link nextjs-container:nextjs --publish 80:80 nginx-image
```

_Next.js container is referenced inside NGINX container as `nextjs`._

## PM2 commands

PM2 commands can still be used inside a container with the `docker exec` command:

```bash
docker exec -it <container-id> pm2 monit          # Monitoring CPU/Usage of each process
```

```bash
docker exec -it <container-id> pm2 list           # Listing managed processes
```

```bash
docker exec -it <container-id> pm2 show           # Get more information about a process
```

```bash
docker exec -it <container-id> pm2 reload all     # 0sec downtime reload all applications
```

## Set Docker Mirror

Edit Docker Desktop's Preferences > Docker Engine:

```json
{
  ...
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
  ...
}
```
