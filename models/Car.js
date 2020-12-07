const mongoose = require('mongoose');
const uniq = require("../utilities/unique.utility");

const CarSchema = mongoose.Schema({
  id: {
		type: String,
		default: function () {
			return uniq.generate();
		},
		unique: true
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
