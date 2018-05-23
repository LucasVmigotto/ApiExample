module.exports = `
  # User type
  type User {
    # User's individual indentificator
    id: ID!
    # User's name
    name: String!
    # User's email
    email: String!
    # User's birthday
    birthday: Date
    # Created date
    create: DateTime
    # Last update
    update: DateTime
  }

  # Input an user
  input InputUser {
    # User's name
    name: String!
    # User's email
    email: String!
    # User's birthday
    birthday: Date
  }

  # Queries to search for users
  type Query {
    # List all users
    list:[ User! ]
    # Read an user
    read(id: ID!):User
  }

  # Mutations to create, edit or delete users
  type Mutation {
    # Create an user
    create(user: InputUser):User
    # Update an user
    update(id: ID!, user: InputUser):User
    # Delete an user
    delete(id: ID!):String
  }

  scalar Date

  scalar DateTime
`
