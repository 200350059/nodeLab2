const mongoose = require('mongoose');

// Our Schema
const TeamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', TeamSchema);