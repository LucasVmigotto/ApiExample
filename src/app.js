const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./configs/db.json')
const routes = require('./routes/routes')
const port = process.env.PORT || 8000
const app = express()

mongoose.connect(config.url).then(
  () => {
    console.log('\n****\tConnecting with the database...\n' +
      '****\t\tMake sure the mongodb service is started.\n' +
      '****\t\tTo fix this, try run in the terminal \'sudo service mongo start\'')
  }
).catch(
  (err) => {
    if (err) {
      console.log(`\n****\tError while connecting to the database.\n` +
        `****\tError description: ${err.message}\n`)
    }
  }
)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(morgan('combined'))
routes(app)
app.use(cors())
app.set('port', port)

module.exports = app
