const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  visited: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Place', PlaceSchema)
