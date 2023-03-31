/*
  Container Maintenance with Compose
  - we have not discussed about if the container that crashes
  - we will add code so that if there is error > server will crash entirely
    > below

  - docker-compose up --build
  - http://localhost:8081/
    > exited with code 0

  - docker ps
    > only have redis container left
  - pic

*/

const express = require('express')
const redis = require('redis')
const process = require('process') // ***

const app = express()

const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
})
client.set('visits', 0)

app.get('/', (req, res) => {
  process.exit(0) // ***

  client.get('visits', (err, visits) => {
    res.send('Number of visits is: ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081... ')
})
