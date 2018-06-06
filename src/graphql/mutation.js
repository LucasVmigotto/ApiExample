const { userMutations } = require('./user/user.schema')
module.exports = `
  # Mutation type definition
  type Mutation {
    # User's mutations definitions
    ${userMutations}
  }
`
