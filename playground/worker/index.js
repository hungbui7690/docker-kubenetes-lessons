/*
  Worker Process Setup
  - create worker/ 
    > create package.json
    > create keys.js 
    > move index.js there

  *** after finish: 
    - cd worker 
    - node index.js 
      > return error of missing redis
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