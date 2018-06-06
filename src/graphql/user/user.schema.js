exports.userTypes = `
  # User type definition
  type User {
    # User's individual identification
    id: ID!
    # User's name
    name: String!
    # User's e-mail
    email: String!
    # User's birthday
    birthday: Date
    # User's create date
    createAt: DateTime
    # User's last update date
    updateAt: DateTime
  }

  scalar Date
  scalar DateTime

  # UserInput type definition
  input UserInput {
    # User's name
    name: String!
    # User's e-mail
    email: String!
    # User's birthday
    birthday: Date
  }

`

exports.userQueries = `
  # Return all Users in a list
  list: [ User! ]!
  # Find only one User by Id passed as a parameter
  read(id: ID!): User!
`

exports.userMutations = `
  # Create a User receiving a UserInput as parameter
  create(input: UserInput!): User
  # Update a User receiving a UserInput and his Id as parameter
  update(id: ID!, input: UserInput!): User
  # Remove a User receiving a Id as parameter
  delete(id: ID!): Boolean
`
