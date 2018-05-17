module.exports = {
  User: {
    birthDay: (user) => user.birthDay ? user.birthDay : 'No informed'
  },
  Query: {
    list: () => {},
    read: () => {}
  },
  Mutations: {
    create: () => {},
    update: () => {},
    remove: () => {}
  }
}
