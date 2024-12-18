const express = require('express')
const app = express()

const mongoose = require('mongoose')


app.use(express.json());
app.use(express.urlencoded({extended: false}))

const uri = "mongodb+srv://thurstlic7:chickenandwafflesarethebest@teamscratch.lilc7.mongodb.net/?retryWrites=true&w=majority&appName=teamScratch";

mongoose.connect(uri)
.then(() => {
    console.log('Connected to MongoDB everybody');
    app.listen(3000, () =>{
        console.log('Server is running on port 3000')
    })
})
.catch((error) => {
    console.error('MongoDB connection error.', error)
})