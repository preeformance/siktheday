const express = require('express')
const router = express.Router()
const placesController = require('../controllers/places') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, placesController.getPlaces)

router.post('/createPlace', placesController.createPlace)

router.put('/visited', placesController.markVisited)

router.put('/toVisit', placesController.marktoVisit)

router.delete('/deletePlace/:id', placesController.deletePlace)

module.exports = router