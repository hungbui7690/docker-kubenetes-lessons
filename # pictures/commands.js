/*

  docker version
  
  Docker Run: 
  - docker run -it redis 
  - docker run hello-world
  - docker run <image_name>   
  - docker run = docker create + docker start

  Override: 
  - docker run busybox echo hi there
  - docker run busybox ls
  - docker run hello-world ls
  - docker run hello-world echo hi there

  List out containers
  - docker ps  
  - docker ps --all

  Life Cycle
  - docker create hello-world
  - docker start <id> 
  - docker start -a <id>

  Remove Stopped Containers
  - docker system prune

  Retrieving Log Outputs
  - docker logs <id>

  Stopping Containers
  - docker stop <id>
  - docker kill <id>

  Execute Command in "Running" Container
  - docker exec -it <id> <command>

  - Shell
    > docker exec -it <id> sh

  Run a Container with Shell 
  - docker run -it <image_name> <command>
    > docker run -it busybox sh

  
  Build Image
  - docker build .

  - build with tags: 
    > docker build -t hungbui7690/redis:latest .
    > docker run hungbui7690/redis

  Run Container with port mapping: 
  - docker run -p 5000:5000 hungbui7690/simpleweb
  - docker run -p 5000:8080 hungbui7690/simpleweb


/////////////////////////////////////////
// DOCKER COMPOSE
/////////////////////////////////////////

  - docker-compose up
    > run only
  - docker-compose up --build
    > build + run

  - docker run -d redis
    > run redis in the background

  - docker-compose up -d 
  - docker-compose down



















/////////////////////////////////////////
// docker-compose.yaml
/////////////////////////////////////////

version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: always 
    build: .
    ports:
      - 8081:8081






/////////////////////////////////////////
// Dockerfile
/////////////////////////////////////////

# Specify base image
FROM node:alpine

# this line just be used to fix "idealTree already exists" error 
WORKDIR /usr/app

# separate the copy
COPY ./package.json ./
RUN npm install
COPY ./ ./


# Default command
CMD ["npm", "start"]



























*/
