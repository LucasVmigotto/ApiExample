const mongoose = require('mongoose')
const { db } = require('./configs/config.json')
const log = require('./util/logLabel')
const app = require('./app')

let server = null

mongoose.connect(db.url).then(() => {
  console.log(`${log()}Connected with the database.`)
  server = app.listen(app.get('port'), (err) => {
    if (err) {
      console.log(`${log()} Error occurred while running the application.` +
        `${log()}Description: ${err.message}`)
    }
    console.log(`${log()}Application running...` +
      `${log()}URL: http://localhost:${app.get('port')}` +
      `${log()}Environment: ${app.get('env')}`)
  })
}).catch((err) => {
  if (err) {
    console.log(`${log()}Error connecting to the database.` +
      `${log()}Make sure the mongo service is started.` +
      `${log()}To fix this, try run 'sudo service mongod start' on terminal` +
      `${log()}Error description: ${err.message}`)
  }
})

module.exports = server
