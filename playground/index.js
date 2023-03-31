/*
  Base Image Issues P2
  - check picture ***
  - Dockerfile
    > FROM node:alpine

    > we will get this error: "npm ERR! idealTree already exists"
      > this is because Node v15 
      > WORKDIR /usr/app

    > enoent ENOENT: no such file or directory, open '/usr/app/package.json'
      > fix in next lessons
    
  *** node:alpine > what does it mean? 
      > alpine means compact and small
      > node:alpine: we don't have a lot of preinstalled programs
        > just have some very basic commands

*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
