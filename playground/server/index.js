/*
  Generating the React App
  - Once you have generated the React app you will need to delete the local git repository that Create React App may have automatically initialized.
  - Inside the newly created client directory, run rm -r .git
  *** If you miss this step, the client folder will be considered a submodule and pushed as an empty folder to GitHub.

  - npx create-react-app client

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

const redis = require('redis')

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
})

const redisPublisher = redisClient.duplicate()

//////////////////////////////////////////

app.get('/', (req, res) => {
  res.send('Hi')
})

// send to postgres
app.get('/values/all', async (req, res) => {
  const values = await pgClient.query('SELECT * from values')
  res.send(values.rows)
})

app.get('/values/current', async (req, res) => {
  redisClient.hgetall('values', (err, values) => {
    res.send(values)
  })
})

app.post('/values', (req, res) => {
  const index = req.body.index

  if (parseInt(index) > 40) {
    return res.status(422).send('Index too high')
  }
  redisClient.hset('values', index, 'Nothing yet!')

  redisPublisher.publish('insert', index)
  pgClient.query('INSERT INTO values(number) VALUES ($1)', [index])

  res.send({ working: true })
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})
