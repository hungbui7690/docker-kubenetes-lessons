/*
  Base Image Issues P1
  - we got the error in prev lesson > because we don't have npm in the base image (alpine)
  - to fix, 2 options: 
    + find another base image that has node and npm pre-installed inside it
    + install ourself

  - pic > we want to use version 6.14
  - Dockerfile
    > FROM node:6.14 
    
*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
