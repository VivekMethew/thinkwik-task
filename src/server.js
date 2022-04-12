require('dotenv').config()
const express = require('express')
const handler = require('./Comman/handler.com')
const indexRoutes = require('./Routes/index')

// create express intance
const app = express()

// set PORT number
const PORT = process.env.PORT || 5001

// create mongoose connection
require('./Config/mongoose.connection')()

// set middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// set Routes
app.use('/api',indexRoutes)

// Invalide Routes and Error Handling
app.use(handler.invalidRoute,handler.errorHandler)

// create server
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})