const mongoose = require('mongoose');
const { Schema } = mongoose;

const topics = new Schema({
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
    type: questions.questionsSchema,
    maxlength: 4,
  },
  
});

module.exports = mongoose.model('topics', topics);