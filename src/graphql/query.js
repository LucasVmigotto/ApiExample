const { userQueries } = require('./user/user.schema')
module.exports = `
  # Query definition
  type Query {
    # User's queries difinition
    ${userQueries}
  }
`
