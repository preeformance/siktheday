const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contact') 
const { ensureAuth } = require('../middleware/auth')

// router.get('/', ensureAuth, contactController.getContactNotes)

router.post('/createContactNote',contactController.createContactNote)

module.exports = router