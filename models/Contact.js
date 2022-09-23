const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  // contactDate: {
  //   type: Date,
  //   required : true,
  //   default: Date.now
  // },
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
    required: true,
  },
  contactNote: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Contact', ContactSchema)
