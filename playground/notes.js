/*
  Rebuilds with Cache
  - pic

  - add new line in Dockerfile
    > RUN apk add --update redis
      RUN apk add --update gcc 

  - rebuild
    > docker build .

////////////////////////////////////

  - if we build again > gcc will use caching to install as well 

////////////////////////////////////

  - but if we switch the 2 RUN lines > now, it will not use caching anymore for both
    > RUN apk add --update gcc
      RUN apk add --update redis
  

  *** we know that when we change the Dockerfile, we cannot use caching >> put the change far down of the file as possible
*/
