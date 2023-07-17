const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/userThoughtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = Mongoose.connection;