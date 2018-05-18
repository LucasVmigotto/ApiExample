module.exports = `
  type User {
    id: ID!
    name: String!
    email: String!
    birthday: Date
    create: DateTime
    update: DateTime
  }

  type Query {
    list:[ User! ]
    read(id: ID!):User
  }

  type Mutation {
    create(name: String!, email: String!, birthday: Date):User
    update(id: ID!, name: String!, email: String!, birthday: Date):User
    delete(id: ID!):String
  }
  scalar Date

  scalar DateTime
`
