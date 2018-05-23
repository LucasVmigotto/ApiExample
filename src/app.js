const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')
const port = process.env.PORT || 8000
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(morgan('combined'))
app.use(cors())
routes(app)
app.set('port', port)

module.exports = app
