/*
  Automatic Container Restarts P1
  - pic

  - docker-compose.yaml
      node-app:
        restart: always

  - docker-compose up 
    > we don't have to build since we don't change anything in index.js
*/

const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()

const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
})
client.set('visits', 0)

app.get('/', (req, res) => {
  process.exit(0)

  client.get('visits', (err, visits) => {
    res.send('Number of visits is: ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081... ')
})
