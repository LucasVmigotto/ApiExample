const graphql = require('graphql-tools')
const typeDefs = require('./types')
const resolvers = require('./resolvers')
exports.user = graphql.makeExecutableSchema({ typeDefs, resolvers })
