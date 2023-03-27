

const mongoose = require("mongoose");

const User = mongoose.Schema({
    name:String,
    email:String,
    mobileNo:{
        type:String,
    },
    address:{
        type:String,
    },
    IdNo:{type:String},
    user:{type:String},
    password:{type:String}

})

module.exports = mongoose.model("User", User);