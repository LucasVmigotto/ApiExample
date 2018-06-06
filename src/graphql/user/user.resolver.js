const { GraphQLDate, GraphQLDateTime } = require('graphql-iso-date')
module.exports = {
  User: {
    birthday: {
      type: GraphQLDate,
      resolve: user => new Date(user.birthday)
    }
  },
  Query: {
    list: () => {},
    read: (parent, { id }, context, info) => {}
  },
  Mutation: {
    create: (parent, { input }, context, info) => {},
    update: (parent, { id, input }, context, info) => {},
    delete: (parent, { id }, context, info) => {}
  }
}
