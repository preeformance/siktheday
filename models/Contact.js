const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  contactDate: {
    type: Date,
    required : true,
    default: Date.now
  },
  contactName: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  contactType: {
    type: String,
    required: false,
  },
  contactNote: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Contact', ContactSchema)
