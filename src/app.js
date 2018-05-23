const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes/route')
const app = express()
const port = process.env.PORT || 8000
const label = '\n****\t'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(cors())
routes(app)
app.set('port', port)

module.exports = app
