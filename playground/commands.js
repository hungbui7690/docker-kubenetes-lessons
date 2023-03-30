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

  *** this will not start any process in that image

/////////////////////////////////////////
// IMAGES
/////////////////////////////////////////

  - docker build .









/////////////////////////////////////////
// Dockerfile
/////////////////////////////////////////

# Use an existing docker image as a base
FROM alpine 

# Download an install a dependency
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]


































*/
