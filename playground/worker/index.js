/*
  Express API Setup
  - create server/
    > create package.json 
      + need to specific with the versions to avoid bugs
      + check this file for more details about libs that we need to use in this project

    > create keys.js
      + all info that we need to connect to database 

  *** package.json: 
    - for both folders: 
        "dev": "nodemon"

*/

const keys = require('./keys')
const redis = require('redis')

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000, // in case lost connection, try to reconnect every 1s
})

const sub = redisClient.duplicate() // clone the one above

function fib(index) {
  if (index < 2) return 1
  return fib(index - 1) + fix(index - 2)
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)))
})

// when there is someone insert to redis > call the function above
sub.subscribe('insert')
