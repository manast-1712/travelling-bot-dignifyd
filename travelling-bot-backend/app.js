const mongoose = require('mongoose');
const express = require('express');
const app = express();

//link to connect to remote cluster
const dB = 'mongodb+srv://manast-1712:manas@cluster0.d1ae1.mongodb.net/travel-bot?retryWrites=true&w=majority';

// import the user model
const User = require('./model/userSchema');

//connection to remote cluster
mongoose.connect(dB).then(() => {
    console.log(`connection Successful!!`);
}).catch((err) => console.log(`Conectino refuted!!`));

//using middlewares
app.use(express.json());
app.use(require('./router/auth'));

app.listen(9000, () => {
    console.log(`Done`);
})
