const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Budget = require('./Budget');
const budgetSchema = require('./Budget');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
  },
  budget: budgetSchema
  
  
});

const User = model('User', userSchema);

module.exports = User;