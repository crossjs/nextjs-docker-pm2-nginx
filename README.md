# Next.js with Docker, PM2 and NGINX

This project is a production Docker setup for a Next.js app.

The Next.js app is launched with [PM2 Runtime](https://pm2.io/runtime/), which is a Production Process Manager for Node.js applications and is used to keep the app alive forever.

The container with the [NGINX](https://www.nginx.com/) web server is used as a reverse proxy, and to handle HTTP caching.

## Docker Compose

```bash
docker-compose up
```

NGINX listens on port 80, which is the default HTTP port, so you can just visit **http://localhost/**

## Without Docker Compose

```bash
# Build images
docker build --tag blog-image ./packages/blog
docker build --tag home-image ./packages/home
docker build --tag nginx-image ./nginx

# Create shared network
docker network create my-network

# Run containers
docker run --network my-network --name blog-container blog-image
docker run --network my-network --name home-container home-image
docker run --network my-network --link blog-container:blog --link home-container:home --publish 80:80 nginx-image
```

_Next.js containers are referenced inside NGINX container as `blog` and `home`._

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

Modify configurations in the Docker Desktop's Preferences > Docker Engine:

```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
}
```
