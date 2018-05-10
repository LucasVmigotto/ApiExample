const mongoose = require('ḿongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: 'Name field can\'t be empty.'
  },
  email: {
    type: String,
    require: 'E-Mail field can\'t be empty.'
  },
  birthday: { type: Date },
  create: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', UserSchema)
