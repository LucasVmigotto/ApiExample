const app = require('./app')

const server = app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(`\n****\tA errot occrred while running the application.\n` +
      `****\tError description: ${err.message}`)
  }
  console.log(`\n****\tApplication running\n` +
    `\t\tURL: https://localhost:${app.get('port')}\n` +
    `\t\tEnvironment: ${app.get('env')}`)
})

module.exports = server
