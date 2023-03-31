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


  Docker Compose
  - docker-compose up
    > run only
  - docker-compose up --build
    > build + run

  - docker run -d redis
    > run redis in the background

  - docker-compose up -d 
  - docker-compose down

  - docker-compose ps 

///////////////////////////////////////

  Build with specific file 
  - docker build -f Dockerfile.dev .

  Volumes
  - docker run -p 3000:3000 -v /app/node_modules -v ${PWD}:/app <image_id>


































/////////////////////////////////////////
// Dockerfile
/////////////////////////////////////////

FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]



/////////////////////////////////////////
// docker-compose.yaml
/////////////////////////////////////////

version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: on-failure 
    build: .
    ports:
      - 8081:8081
























*/
