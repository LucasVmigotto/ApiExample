const graphql = require('graphql-tools')
const types = require('./usertype')
const resolvers = require('./userresolvers')
module.exports = graphql.makeExecutableSchema({ types, resolvers })
