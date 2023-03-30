/*
  Tagging an Image
  - when we build, we will get the id 
  - docker run <id>
    > start a container, and run the instance of that image in the container

  - the problem is the <id> is hard to remember, so we need to copy it 
    > it should be good if we can do:
      + docker run redis
      + docker run hello-world
        ...

  - pic

  - docker build -t hungbui7690/redis:latest .
    > don't forget the dot at the end 

  - docker run hungbui7690/redis
    > don't need to specify version when run > use the latest one


  *** tag name: 
  - dockerID/project:version
    > hungbui7690/mern-movie:latest


  


*/
