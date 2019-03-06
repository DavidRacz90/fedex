const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  topics: {
    type: topics.topicsSchema
  }
});

module.exports = mongoose.model('user', User)