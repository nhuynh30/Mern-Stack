require('dotenv').config()


const express = require('express')

//express app
const app = express() 

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
app.get('/', (req, res)=>{
    res.json({mssg: "Welcome to the App"})

})

//listen for request 
app.listen(process.env.PORT, ()=>{
    console.log("Llistening on port!!!")
    console.log("PORT is:", process.env.PORT)
})

process.env