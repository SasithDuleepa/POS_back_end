const mongoose = require("mongoose");

const Item = mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    sale_price:{
        type:String,
    },
    taken_price:{
        type:String,
    },
    quantity:{
        type:String,
    }
})

module.exports = mongoose.model("Item", Item)