const express = require('express');
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const router = express.Router();
const Newuser = require("../model/usermodel")

router.use(bodyParser.json())

router.post('',async(req,res)=>{
    var newuser = Newuser({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        IdNo:req.body.IdNo,
        user:req.body.user,
        password:req.body.password

    })
    const save =await newuser.save()
    res.send(save)
   
  
    

})
module.exports = router;