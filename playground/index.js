/*
  A Few Missing Files
  - enoent ENOENT: no such file or directory, open '/usr/app/package.json'
  - pic

  Copying Build Files
  - Dockerfile
    > COPY ./ ./

  - docker build -t hungbui7690/simpleweb .
    > http://localhost:5000/
    > after build, we cannot access 

*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
