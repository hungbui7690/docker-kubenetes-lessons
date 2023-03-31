/*
  Container Status with Docker Compose
  - docker run redis 
  - docker ps 
    > show the status of containers

  - docker-compose up
    > start 
  - docker-compose ps 
    > show the status > just for compose 
    

  *** "docker-compose ps" need to be run in the same folder of docker-compose.yaml file > since it needs to read that file to determine which containers is running

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
  process.exit(9)

  client.get('visits', (err, visits) => {
    res.send('Number of visits is: ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081... ')
})
