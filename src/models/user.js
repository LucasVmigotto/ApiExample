const mongoose = require('ḿongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  birthday: Date
})

module.exports = mongoose.model('User', UserSchema)
