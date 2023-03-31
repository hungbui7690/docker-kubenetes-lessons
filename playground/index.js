/*
  Introducing Docker Compose
  - docker run hungbui7690/visits
    > error: connect ECONNREFUSED 127.0.0.1:6379
    > our server is stating up, but there's no redis server to connect to 

  - so we need to have redis server
    > docker run redis

  - after this setup, still have the same error 

  - pic

  - run: docker-compose
    > show all options

  *** docker-compose helps us do not make repetitive commands in docker-cli
    > helps us to run multiple docker commands quickly 

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
