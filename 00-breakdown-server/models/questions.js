const mongoose = require('mongoose');
const { Schema } = mongoose;
const answers = require('./answers');

const questions = new Schema({
  Question: {
    type: String,
    required: true,
    unique: true,
  },
  Answers: {
    type: [answers.answersSchema],
    maxlength: 4
  },
});

module.exports = mongoose.model('questions', questions);