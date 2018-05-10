const app = require('./app')

const server = app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(`\n****\tA errot occrred while running the application.\n` +
      `****\tError description: ${err.message}`)
  }
  console.log(`\n****\tApplication running\n` +
    `\tURL: https://localhost:${app.get('port')}\n` +
    `\tEnvironment: ${app.get('port')}`)
})

module.exports = server
