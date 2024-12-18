const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const PORT = 8080; 

const mongoose = require('mongoose');

const controller = require('./src/server/controller'); // import controller
const router = require('./src/server/routes'); // import router


app.use(express.json());
app.use(express.urlencoded({extended: false}));

//connect to MongoDB 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB everybody');
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)
    });
})
.catch((error) => {
    console.error('MongoDB connection error.', error);
}); 

// mount router at the /songs route 
app.use('/playlist', router); 

// unknown route handler 
app.use((req, res) => res.sendStatus(404));

// global error handler middleware 
app.use((err, req, res, next) => {
    const defaultErr={
        log: 'Express error handler caught unknown error',
        status: 500,
        message: {err: 'internal server error'},
    };
    const errorDetails = {
        log: err.log || defaultErr.log,
        status: err.status || defaultErr.status,
        message: err.message || defaultErr.message,
    };
    console.error(errorDetails.log);
    console.error(`Request Method: ${req.method}`);
    console.error(`Request URL: ${req.originalUrl}`);

    res.status(errorDetails.status).json(errorDetails.message);
}); 

