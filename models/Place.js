const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
  placeDate: {
    type: Date,
    required : true,
    default: Date.now
  },
  placeName: {
    type: String,
    required: true,
  },
  placeLocation: {
    type: String,
    required: false,
  },
  placeAuthenticRating: {
    type: Number,
    required: false,
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
    required: false,
  },
    favoritePlace: {
    type: Boolean,
    default: false,
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
