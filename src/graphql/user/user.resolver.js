const { GraphQLDate, GraphQLDateTime } = require('graphql-iso-date')
const controller = require('../../controllers/usercontroller')
module.exports = {
  User: {
    birthday: {
      type: GraphQLDate,
      resolve: user => new Date(user.birthday)
    }
  },
  Query: {
    list: () => controller.list(),
    read: (parent, { id }, context, info) => controller.read(id)
  },
  Mutation: {
    create: (parent, { input }, context, info) => controller.create(input),
    update: (parent, { id, input }, context, info) => controller.update(id, input),
    delete: (parent, { id }, context, info) => controller.delete(id)
  }
}
