const User = require('../models/user')
const log = require('../util/logLabel')

const errorHandler = (err, res, message) => {
  console.log(`${log()}Error: ${err.message}`)
  res.json({ data: message, err: true })
}

exports.list = (req, res) => {
  User.find((err, users) => {
    if (err) { return errorHandler(err, res, 'Error listing users.') }
    res.json({ data: users, err: false })
  })
}

exports.create = (req, res) => {
  const newUser = new User(req.body)
  newUser.save((err, user) => {
    if (err) { return errorHandler(err, res, 'Error creating the user.') }
    res.json({ data: user, err: false })
  })
}

exports.read = (req, res) => {
  User.findById({ _id: req.params.id }, (err, user) => {
    if (err) { return errorHandler(err, res, 'Error reading the user.') }
    res.json({ data: user, err: false })
  })
}

exports.update = (req, res) => {
  let newUser = req.body
  newUser.update = Date.now()
  User.findByIdAndUpdate({ _id: req.body.id },
    newUser, { new: true }, (err, user) => {
      if (err) { return errorHandler(err, res, 'Error updating the user') }
      res.json({ data: user, err: false })
    }
  )
}

exports.delete = (req, res) => {
  User.remove({ _id: req.params.id }, (err) => {
    if (err) { return errorHandler(err, res, 'Error deleting the user') }
    res.json({ err: false })
  })
}
