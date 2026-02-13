require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express() 

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request 
            app.listen(process.env.PORT, ()=>{
                console.log("Listening on PORT!!!")
                console.log("Port is: ",process.env.PORT)
                console.log("Connect to DP")
        })
    })
    .catch((error)=>{
        console.log(error)
    })


process.env