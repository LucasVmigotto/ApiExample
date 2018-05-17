module.exports = `
  type User {
    id: ID!
    name: String!
    email: String!
    birthDay: DateTime
    create: DateTime
    update: DateTime
  }

  type Query {
    list[ User! ]
    read
  }

  type Mutation {
    create(name: String!, email: String!, birthDay: DateTime):User
    update(name: String!, email: String!, birthDay: DateTime):User
    remove(id: ID!)
  }
`
