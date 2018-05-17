const app = require('./app')
const label = '\n****\t'

const server = app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(`${label} Error occurred while running the application.` +
      `${label}Description: ${err.message}`)
  }
  console.log(`${label}Application running...` +
    `${label}URL: http://localhost:${app.get('port')}` +
    `${label}Environment: ${app.get('env')}`)
})

module.exports = server
