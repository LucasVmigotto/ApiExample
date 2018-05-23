const mongoose = require('mongoose')
const config = require('./configs/db.json')
const log = require('./util/logLabel')
const app = require('./app')

let server = null

mongoose.connect(config.url).then(
  () => {
    console.log(`${log()}Connected with the database...`)
    server = app.listen(app.get('port'), (err) => {
      if (err) {
        console.log(`${log()}A error occrred while running the application.` +
          `${log()}Error description: ${err.message}`)
      }
      console.log(`${log()}Application running` +
        `${log()}URL: https://localhost:${app.get('port')}` +
        `${log()}Environment: ${app.get('env')}`)
    })
  }
).catch(
  (err) => {
    if (err) {
      console.log(`${log()}Error while connecting to the database.` +
      `${log()}Make sure the mongodb service is started.` +
      `${log()}To fix this, try run in the terminal 'sudo service mongo start'` +
      `${log()}Error description: ${err.message}`)
    }
  }
)

module.exports = server
