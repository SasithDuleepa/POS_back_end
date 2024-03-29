const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config()

const userrouter = require('./routes/userrouts');
const itemrouter = require('./routes/itemrouts');
const billrouter = require('./routes/billrouts')

const app = express();
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true
}));

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{console.log("database conected!!!")})
.catch((error)=>{console.log(error);})


app.use("/users", userrouter);
app.use("/items", itemrouter);
app.use("/bills", billrouter);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`server is running on port ${process.env.SERVER_PORT}`)
});


