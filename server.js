const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const methodOverride = require("method-override");
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const placeRoutes = require('./routes/places')
const contactRoutes = require('./routes/contact')

//Use .env file
require('dotenv').config({path: './.env'})

//Passport config
require('./config/passport')(passport)

//Connect to Database
connectDB()

//Using EJS for views
app.set('view engine', 'ejs')

//Static Folder
app.use(express.static('public'))

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Logging
app.use(logger('dev'))

//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Use flash messages for errors, info, etc.
app.use(flash())

//Routes  
app.use('/', mainRoutes)
app.use('/places', placeRoutes)
app.use('/contact', contactRoutes)
 
//Server Runing
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port ${process.env.PORT}` )
})    