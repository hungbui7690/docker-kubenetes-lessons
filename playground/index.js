/*
  Networking with Docker Compose 
  - by creating the docker-compose file, the services will be in the same network
  - pic

  - but how can we access redis server from nodejs 
  - normally, when connect to redis db server
      const client = redis.createClient({
        host: 'https://my-redis-server.com' 
      })
  - with docker-compose, just put the name of the service

*/

const express = require('express')
const redis = require('redis')

const app = express()

const client = redis.createClient({
  host: 'redis-server', // ***
  port: 6379, // default port of redis
})
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
