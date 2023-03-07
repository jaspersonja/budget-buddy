const mongoose = require('mongoose');
//TODO: set up the proper path mongodb://localhost/<db-name-here>
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budgetdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
