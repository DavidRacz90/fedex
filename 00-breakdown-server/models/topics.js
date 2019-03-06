const mongoose = require('mongoose');
const { Schema } = mongoose;

const Topics = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: '',
  },
  questions: {
    type: questions.questionsSchema
  },
});

module.exports = mongoose.model('topics', Topics);