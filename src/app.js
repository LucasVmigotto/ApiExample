const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes/route')
const { db } = require('./configs/config.json')
const app = express()
const port = process.env.PORT || 8000
const label = '\n****\t'

mongoose.connect(db.url).then(() => {
  console.log(`${label}Connected with the database.`)
}).catch((err) => {
  if (err) {
    console.log(`${label}Error connecting to the database.` +
      `${label}Make sure the mongo service is started.` +
      `${label}To fix this, try run 'sudo service mongod start' on terminal` +
      `${label}Error description: ${err.message}`)
  }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(cors())
routes(app)
app.set('port', port)

module.exports = app
