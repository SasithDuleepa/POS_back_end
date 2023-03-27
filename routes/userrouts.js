const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Newuser = require("../model/usermodel")



router.post('',async(req,res)=>{
    var newuser = Newuser({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        IdNo:req.body.IdNo,
        user:req.body.user,
        password:req.body.password

    })

})
module.exports = router;