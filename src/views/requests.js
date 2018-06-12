exports.reqList = 'query list {' +
  'list { id name email birthday createAt updateAt } }'

exports.reqRead = 'query read($id: ID!){' +
  'read(id: $id) { id name email birthday } }'

exports.reqCreate = 'mutation create($input: UserInput!) {' +
  'create(input: $input) { name createAt } }'

exports.reqUpdate = 'mutation update($id: ID!, $input: UserInput!) {' +
  'update(id: $id, input: $input) { name updateAt } }'

exports.reqDelete = 'mutation delete($id: ID!) { delete(id: $id) }'
