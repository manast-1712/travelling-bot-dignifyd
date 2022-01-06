const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    countryCode: {
        type: Number,
        required: true
    },
    cityCode: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//for hashing and securing password
// we need to use this keyword thus we wont be using fat arrow function.
// instead we use normal function
userSchema.pre('save', async function (next) {
    console.log(`inside pre hook`);
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,7);  
    }
    next();
});

//creating collection named users
const User = mongoose.model('users', userSchema);
module.exports = User;