/*
  Container Port Mapping
  - pic
  - docker run with port mapping
    > docker run -p 5000:5000 hungbui7690/simpleweb

  *** by default, there no restriction for the container to reach out : npm install > reach out to download the libs 
    > but on the other hand, incoming requests to container is restricted

  *** port on local and container do not need to be matched 
    > we can tell docker that everytime we have incoming requests to port 5000, please forward it to port 8080 in the container
    > docker run -p 5000:8080 hungbui7690/simpleweb
*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
