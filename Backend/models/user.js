const mongoose = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose');


// creating userschema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,

})

// plugging in passport-local-mongoose
userSchema.plugin(passportLocalMongoose)

//creating User object
const User = mongoose.model('User', userSchema)

module.exports = User