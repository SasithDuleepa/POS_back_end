const mongoose = require("mongoose");

const Bill = mongoose.Schema({
    employee:{
        type:String,
        requied:true
    },
    billnumber:{
        type:String,
    },
    date:{
        type:String,
    },
    bill:{
        type:Array,
    }
})

module.exports = mongoose.model("Bill", Bill)