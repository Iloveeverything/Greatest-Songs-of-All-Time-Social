const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();


const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({extended: false}));


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB everybody');
    app.listen(3000, () =>{
        console.log('Server is running on port 3000')
    });
})
.catch((error) => {
    console.error('MongoDB connection error.', error);
})

app.use((req, res) => res.sendStatus(404));

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
})

