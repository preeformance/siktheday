const User = require('../models/User')

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs', {user: req.user})
    }
}