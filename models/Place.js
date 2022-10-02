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
    minLength: 1,
    maxLength: 50,
  },
  placeLocation: {
    type: String,
    required: false,
    minLength: 1,
    maxLength: 50,
  },
  placeAuthenticRating: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },
  placeAtmosphereRating: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },
  placeTasteRating: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
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
    minLength: 1,
    maxLength: 1000,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Place', PlaceSchema)
