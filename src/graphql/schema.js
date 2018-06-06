const { makeExecutableSchema } = require('graphql-tools')
const Mutation = require('./mutation')
const Query = require('./query')
const { userTypes } = require('./user/user.schema')
const resolvers = require('./user/user.resolver')

const SchemaDefinition = `
  # Schema type definition
  type Schema {
    query: Query
    mutation: Mutation
  }
`

module.exports = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    Mutation,
    Query,
    userTypes,
  ],
  resolvers
})
