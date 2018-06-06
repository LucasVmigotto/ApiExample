const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name field can\'t be empty'
  },
  email: {
    type: String,
    required: 'E-Mail field can\'t be empty'
  },
  birthday: { type: Date },
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: { type: Date }
})

module.exports = mongoose.model('User', UserSchema)
