const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Bill = require('./budget-array/Bill')
const Grocery = require('./budget-array/Grocery')
const Shopping = require('./budget-array/Shopping')
const Pet = require('./budget-array/Pet')
const Invest = require('./budget-array/Invest')
const Dining = require('./budget-array/Dining')

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
  budget: {
    income: {
      type: Number,
      required: false,
    }, 
    bill: [Bill],
    shopping: [Shopping],
    grocery: [Grocery],
    pet: [Pet],
    dining: [Dining],
    recurringInvestment: [Invest]
  }
});

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