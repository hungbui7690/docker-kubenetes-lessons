/*
  Node Server Setup
  - create package.json MANUALLY
  - create index.js

  *** commands.js will be moved to #pictures/
*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
