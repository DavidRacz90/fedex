const mongoose = require('mongoose');
const { Schema } = mongoose;

const answers = new Schema({
  answerText: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('answers', answers);