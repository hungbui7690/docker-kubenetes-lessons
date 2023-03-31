/*
  Stopping Docker Compose Containers
  - docker run -d redis 
    > run redis in the background
  - docker ps
    > get the id 
  - docker stop <id>

  
  - with docker-compose, we starts and runs multiple containers at the same time > it's a pain to find each id and stop one by one 
  - pic

  > docker-compose up -d 
  > docker-compose down


*/

const express = require('express')
const redis = require('redis')

const app = express()

const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
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
