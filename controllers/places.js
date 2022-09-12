const Place = require('../models/Place')

module.exports = {
    getPlaces: async (req,res)=>{
        console.log(req.user)
        try{
            const placeItems = await Place.find({userId:req.user.id})
            const itemsLeft = await Place.countDocuments({userId:req.user.id,visited: false})
            res.render('places.ejs', {places: placeItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createPlace: async (req, res)=>{
        try{
            const placeItem = req.body;
            console.log(await Place.create({placeDate: placeItem.placeDate,
                                            placeName: placeItem.placeName, 
                                            placeLocation: placeItem.placeLocation,
                                            placeAuthenticRating: placeItem.placeAuthenticRating,
                                            placeAtmosphereRating: placeItem.placeAtmosphereRating,
                                            placeTasteRating: placeItem.placeTasteRating,
                                            favoritePlace: placeItem.favoritePlace,
                                            placeNotes: placeItem.placeNotes, 
                                            userId: req.user.id}))
            
            
            console.log('Place has been added!')
            res.redirect('/places')
        }catch(err){
            console.log(err)
        }
    },
    markVisited: async (req, res)=>{
        try{
            await Place.findOneAndUpdate({_id:req.body.placeIdFromJSFile},{
                completed: true
            })
            console.log('Marked Visited')
            res.json('Marked Visited')
        }catch(err){
            console.log(err)
        }
    },
    marktoVisit: async (req, res)=>{
        try{
            await Place.findOneAndUpdate({_id:req.body.placeIdFromJSFile},{
                completed: false
            })
            console.log('Marked toVisit')
            res.json('Marked toVisit')
        }catch(err){
            console.log(err)
        }
    },
    deletePlace: async (req, res)=>{
        console.log(req.body.placeIdFromJSFile)
        try{
            await Place.findOneAndDelete({_id:req.body.placeIdFromJSFile})
            console.log('Deleted Place')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    