const User = require('../model/user')
const log = require('../util/label')

const errorHandler = (err, operation) => {
  console.log(`${log()} An error occurred while ${operation} function.` +
    `${log()}Error name: ${err.name}` +
    `${log()}Error description: ${err.message}`)
}

exports.list = () => {
  return new Promise((resolve, reject) => {
    User.find((err, users) => {
      if (err) {
        errorHandler(err, 'list')
        reject(null)
      }
      resolve(users)
    })
  })
}

exports.create = (user) => {
  return new Promise((resolve, reject) => {
    new User(user).save((err, userCreated) => {
      if (err) {
        errorHandler(err, 'create')
        reject(null)
      }
      resolve(userCreated)
    })
  })
}

exports.read = (id) => {
  return new Promise((resolve, reject) => {
    User.findById({ _id: id }, (err, user) => {
      if (err) {
        errorHandler(err, 'read')
        reject(null)
      }
      resolve(user)
    })
  })
}

exports.update = (id, user) => {
  return new Promise((resolve, reject) => {
    user.updateAt = Date.now()
    User.findOneAndUpdate({ _id: id }, user, { new: true },
      (err, userUpdated) => {
        if (err) {
          errorHandler(err, 'update')
          reject(null)
        }
        resolve(userUpdated)
      })
  })
}

exports.delete = (id) => {
  return new Promise((resolve, resject) => {
    User.remove({ _id: id }, (err) => {
      if (err) {
        errorHandler(err, 'delete')
        reject(false)
      }
      resolve(true)
    })
  })
}
