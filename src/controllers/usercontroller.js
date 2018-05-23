const User = require('../models/user')
const log = require('../util/logLabel')

const errorHandler = (err, message) => {
  console.log(`${log()}Error: ${err.message}`)
}

exports.list = () => {
  return new Promise((resolve, reject) => {
    User.find((err, users) => {
      if (err) {
        errorHandler(err, 'Error listing the users')
        reject(null)
      }
      resolve(users)
    })
  })
}

exports.create = (user) => {
  return new Promise((resolve, reject) => {
    new User(user).save((err, user) => {
      if (err) {
        errorHandler(err, 'Error saving the user.')
        reject(null)
      }
      resolve(user)
    })
  })
}

exports.read = (id) => {
  return new Promise((resolve, reject) => {
    User.findById({ _id: id }, (err, user) => {
      if (err) {
        errorHandler(err, 'Error reading the user')
        reject(null)
      }
      resolve(user)
    })
  })
}

exports.update = (user) => {
  return new Promise((resolve, reject) => {
    user.update = Date.now()
    User.findByIdAndUpdate({ _id: user.id }, user, { new: true },
      (err, user) => {
        if (err) {
          errorHandler(err, 'Error updateing the user')
          reject(err)
        }
        resolve(user)
      }
    )
  })
}

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    User.remove({ _id: id }, (err) => {
      if (err) {
        errorHandler(err, 'Error deleting the user')
        reject({ err: true })
      }
      resolve('Success deleting the user')
    })
  })
}
