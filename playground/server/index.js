/*
  More Express API Setup P1
  - check app-architecture picture to understand

  - now, we want to make sure express will store data to redis 
    > below

*/

const keys = require('./keys')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const { Pool } = require('pg')
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
})

pgClient.on('connect', (client) => {
  client
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch((err) => console.error(err))
})

///////////////////////////////////////////
const redis = require('redis')

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
})

// *** If you need to send regular commands to Redis while in subscriber mode, just open another connection with a new client (use client.duplicate() to quickly duplicate an existing client).
const redisPublisher = redisClient.duplicate()
