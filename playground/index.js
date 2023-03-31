/*
  Specifying a Working Directory
  - pic

  - Dockerfile
      WORKDIR /usr/app
      COPY ./ ./
      > with this setup, the default folder is /usr/app 
      > ./ in COPY is /usr/app

  - rebuild
  - docker run -it <id> sh
    > default location will be /usr/app

*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
