/*
  Automatic Container Restarts P4
  - docker-compose.yaml

  - restart: unless-stopped
    > always restart, unless we want force it to stop
  - restart: "no"
    > with the other policies > we don't have to have double/single quote, but for this one, we must have 
    > because no without double quote = false

  *** normally, we use "on-failure"

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
  process.exit(9) // ***

  client.get('visits', (err, visits) => {
    res.send('Number of visits is: ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081... ')
})
