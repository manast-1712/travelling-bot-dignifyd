const express = require('express');
const router = express.Router();
const User = require("../model/userSchema");

router.get('/',(req,res) => {
    res.send(`Hello world from auth.js`);
});

router.post('/register',(req,res) => {

    const {name, email, phone, password} = req.body;
    if(!name || !email || !phone || !password){
        return res.status(422).json({error:"Please fill the details"});
    }

    //using promises
    User.findOne({email:email})
    .then((userExist) =>{
        if(userExist){
            return res.status(422).json({error:"Email id already exists"});
        }
    
    const user = new User({name,email,phone,password});
    user.save().then(() => {
        res.status(201).json({message:"inserted"});
    }).catch((err) => res.status(500).json({error:"Registration failed"}))  ;
    console.log(req.body);
}).catch(err => {console.log(err);});


});

module.exports = router;