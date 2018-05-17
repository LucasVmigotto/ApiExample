const express = require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const morgan =require('morgan')
const bodyParser =require('body-parser')
const port = process.env.PORT || 8000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(cors)
app.set('port', port)

module.exports = app
