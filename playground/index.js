/*
  A Few Planned Errors
  - now, we want to wrap this project into a container 
  - to start nodejs app:
    + npm install 
    + npm start

  - pic

  (1)
  - create Dockerfile

  (2)
  - docker build .
    > error: npm: not found
*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
