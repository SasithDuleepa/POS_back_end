const express = require('express');
const mongoose = require("mongoose");

require('dotenv').config()
const userrouter = require('./routes/userrouts');


const app = express();

mongoose.connect(process.env.DB_url)
.then(()=>{console.log("database conected!!!")})
.catch((error)=>{console.log(error);})

app.use("/users", userrouter);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`server is running on port ${process.env.SERVER_PORT}`)
});


