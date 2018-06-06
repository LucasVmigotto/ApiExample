const mongoose = require('mongoose')
const app = require('./app')
const { db } = require('./configs/config.json')
const log = require('./util/label')
let server = null

mongoose.connect(db.url).then(() => {
  console.log(`${log()}Successfully connected with the database.`)
  server = app.listen(app.get('port'), (err) => {
    if (err) console.log(`${log()}Error running the application.` +
      `${log()}Error name: ${err.name}` +
      `${log()}Error description: ${err.message}`)
    console.log(`${log()}Application running` +
      `${log()}URL: http://${app.get('host')}:${app.get('port')}` +
      `${log()}Environment: ${app.get('env')}`)
  })
}).catch((err) => {
  console.log(`${log()}Error connecting to the database.` +
    `${log()}Error name: ${err.name}` +
    `${log()}Error description: ${err.message}`)
})

module.exports = server
