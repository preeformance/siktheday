const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
  placeDate: {
    type: Date,
    required : true,
    default: Date.now
  },
  placeItem: {
    type: String,
    required: true,
  },
  placeLocation: {
    type: String,
    required: false,
  },
  placeAuthenticRating: {
    type: Number,
    required: true,
  },
  placeAtmosphereRating: {
    type: Number,
    required: false,
  },
  placeTasteRating: {
    type: Number,
    required: false,
  },
  visited: {
    type: Boolean,
    required: true,
  },
    favoritePlace: {
    type: Boolean,
    required:false,
  },
    placeNotes: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Place', PlaceSchema)
