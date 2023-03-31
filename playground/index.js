/*
  Docker Compose Files
  - pic

  - create docker-compose.yaml
    > check the comments to understand what this file does 

*/

const express = require('express')
const redis = require('redis')

const app = express()

const client = redis.createClient()
client.set('visits', 0)

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is: ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081... ')
})
