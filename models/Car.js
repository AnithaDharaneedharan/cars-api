const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
  },
  year: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Car', CarSchema);
