import * as mongoose from 'mongoose';

export type UserModel = mongoose.Document & {
  name: String,
  email: String,
  birthday: Date,
  create: Date,
  update: Date
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name field can\'t be empty.'
  },
  email: {
    type: String,
    required: 'E-Mail field can\'t be ,empty.'
  },
  brithday: { type: Date },
  create: {
    type: Date,
    default: Date.now()
  },
  update: { type: Date }
});

export default UserSchema;
