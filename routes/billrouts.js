const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const router = express.Router();
var jwt = require('jsonwebtoken');
const NewBill = require('../model/billmodel');

router.use(bodyParser.json());

router.post('', async(req,res)=>{
    var bill = NewBill({
        employee:req.body.employee,
        billnumber:req.body.billnumber,
        date:req.body.date,
        bill:req.body.bill
    })
    const save = await bill.save()
    res.send(save)
})


router.post("/find", async(req,res)=>{
    var billnumber = req.body.billname;
    console.log(billnumber)
    var finduser =await NewBill.find({"billnumber":{$regex: '^'+billnumber, $options:'i'}})
    .then((finduser)=>{
        
        const names = finduser.map(item => item.billnumber);
        res.send(names)
        

    })
    .catch((err)=>{
        res.send(err)
    })
   
})


module.exports = router;