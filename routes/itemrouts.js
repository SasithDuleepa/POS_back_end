const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const router = express.Router();
var jwt = require('jsonwebtoken');
const NewItem = require('../model/itemmodel');

router.use(bodyParser.json());

router.post('', async(req,res)=>{
    var newitem = NewItem({
        item:req.body.item,
        sale_price:req.body.sale_price,
        taken_price:req.body.taken_price,
        quantity:req.body.quantity
    })
    const save = await newitem
    .save()
    res.send(save)
})


router.post("/find", async(req,res)=>{
    var name = req.body.itemname;
    console.log(name)
    var finduser =await NewItem.find({"item":{$regex: '^'+name, $options:'i'}})
    .then((finduser)=>{
        
        const names = finduser.map(item => item.item);
        res.send(names)
        console.log(names)
        

    })
    .catch((err)=>{
        res.send(err)
    })
   
})


module.exports = router;