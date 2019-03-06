const mongoose = require('mongoose');
const { Schema } = mongoose;

const questions = new Schema({
  Question: {
    type: String,
    required: true,
    unique: true,
  },
  Answers: {
    type: answers.answersSchema
  }
});

module.exports = mongoose.model('questions', questions);