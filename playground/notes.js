/*
  Manual Image Generation with Docker Commit
  - we know that we can create image 
  - then start the container with the instance of that image 
  - but we also generate from a container as well
    > similar to dockerfile, but we do it on command line

  - pic


  - docker commit -c
    > -c: default command > similar to CMD   

  *** we don't use this approach in the real world 
    > most of the time, we use Dockerfile to generate image

////////////////////////////////////////////////////

  If there is any error: 
  - docker commit -c 'CMD ["redis-server"]' <CONTAINERID>
    > Windows user: you may get an error like "/bin/sh: [redis-server]: not found" or "No Such Container"

  - Instead, try running the command like this:
    > docker commit -c "CMD 'redis-server'" <CONTAINERID>

*/
