const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have a name'],
  },
  email: {
    type: String,
    required: [true, 'User must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLen: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Confirm password is required'],
    minLen: 8,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
