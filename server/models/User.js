const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//const Budget = require('./Budget');
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
<<<<<<< HEAD
  budget: [budgetSchema]
=======
  budget: budgetSchema
>>>>>>> 4fde7eb0c573e09d5b23ea6620c0fddb6b580e63
});
// lines 26-39 are new. needed to call the bcrypt and budget
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;