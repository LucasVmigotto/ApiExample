const graphqlHttp = require('express-graphql')
const schema = require('../graphql/schema')
module.exports = (app) => {
  app.use('/users', graphqlHttp({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  }))
  app.use((req, res) => {
    res.status(404)
      .send({ data: `${req.method}:${req.originalUrl} not found` })
  })
}
