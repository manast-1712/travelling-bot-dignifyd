const express = require('express');
const router = express.Router();
const User = require("../model/userSchema");
const bcrypt = require('bcryptjs');

router.get('/',(req,res) => {
    res.send(`Hello world from auth.js`);
});


//registration route
router.post('/register',(req,res) => {

    const {name, email, phone, countryCode, cityCode, password, cppassword} = req.body;
    if(!name || !email || !phone || !password || !cppassword){
        return res.status(422).json({error:"Please fill the details"});
    }
    //using promises
    User.findOne({email:email})
    .then((userExist) =>{
        if(userExist){
            return res.status(422).json({error:"Email id already exists"});
        }else if(password != cppassword){
            return res.status(422).json({error:"Both password must be same"});
        }else{
            const user = new User({name,email,phone,countryCode, cityCode, password});

            //call the function for hashing the password. for this we use pre and post
            user.save().then(() => {
                res.status(201).json({message:"User Registration Successful"});
            }).catch((err) => res.status(500).json({error:"Registration failed"}))  ;
            console.log(req.body);

    }
    
    
}).catch(err => {console.log(err);});
});

//login route
router.post('/login',async (req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            //this message will be sent to frontend
            return res.status(400).json({error:"fill all the fields"});
        }

        //searching whether user is registered or not
        const userLogin = await User.findOne({email: email});
        const isMatch = await bcrypt.compare(password, userLogin.password);
        
        if(!userLogin || !isMatch){
            res.status(400).json({error:"Invalid Credentials"});
        }else{
            res.status(200).json({message:"Sign in successfull!!"});
        }
        console.log(userLogin);

    }catch(err){
        console.log(err);
    }
});

module.exports = router;