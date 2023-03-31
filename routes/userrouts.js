const express = require('express');
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const router = express.Router();
var jwt = require('jsonwebtoken');
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

router.post("/login",async(req,res)=>{
    const name = req.body.name;
    const pwd = req.body.password;
    var finduser = await Newuser.findOne({name:name})
    .then((finduser)=>{
        console.log(finduser)
        if(finduser.password=== pwd){
            const user = {
                user: finduser.user,
                name: finduser.name,
                userid:finduser._id
            }
            const token = jwt.sign(user, process.env.SECRET_KEY,{expiresIn:'1h'});
            const data ={
                user:finduser.user,
                name:finduser.name,
                token:token
            }
            res.send(data)
        }
    })
    .catch((err)=>{res.send(err)})
})

router.post("/find", async(req,res)=>{
    var name = req.body.name;
    console.log(name)
    var finduser =await Newuser.find({"name":{$regex: '^'+name, $options:'i'}})
    .then((finduser)=>{
        console.log(finduser)
        const names = finduser.map(item => item.name);
        res.send(names)
        console.log(name)

    })
    .catch((err)=>{
        res.send(err)
    })
   
})

router.get("/user",(req,res)=>{
    const cookieValue =req.headers.cookie;
    if(cookieValue){
        const token = cookieValue.split('=')[1].split('%22')[3];
    //     const jsonObject = JSON.parse(cookieValue);
    //     const tokenvalue = jsonObject.token;
    
    
    jwt.verify(`${token}`, process.env.SECRET_KEY, (err,decoded)=>{
        if(err){
            console.log(err);
        }else{
            console.log(decoded);
            res.send(decoded.name);
        }
    })
}

    // res.send(user)
})
module.exports = router;