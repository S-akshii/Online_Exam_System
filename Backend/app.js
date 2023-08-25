//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")
const session = require('express-session')
const passport = require('passport')
const { serializeUser, deserializeUser } = require("passport");
const { json } = require("body-parser");
const auth_checker = require('./middleware/authentication_cheker')
const Signup = require('./routes/signup')
const cors = require('cors');

//setting up the app
const app = express()

// for parsing urlencoded data
app.use(bodyParser.urlencoded({
    extended: true
}))

// for parsing body if the type is json
app.use(bodyParser.json())


//making public folder available statically
app.use(express.static("public"))

//setting up session
app.use(session({
    secret: 'Online Examination System',
    resave: false,
    saveUninitialized: false

}))

//seeting up passport
app.use(passport.initialize())
app.use(passport.session())

//enabling cors origin
// use it before all route definitions
var corsOptions = {
    origin: 'http://localhost:3001',
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
}
app.use(cors(corsOptions));


//mongodb connection
mongoose.connect('mongodb://localhost:27017/examdb', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err)
    }
});

/////////////////----------here was user------------
const User = require("./models/user.js");
const Login = require("./routes/login");
const { application } = require("express");
const Exams = require("./routes/Exams.js");
const Takeexam = require("./routes/takeexam");
const submit = require("./routes/submit");
const Results = require("./routes/results");

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



app.post('/signup', Signup)


app.post('/login', Login)



app.post('/logout', function (req, res) {
    req.logout(function () {

    })
    res.send("logged out")
})

app.get('/dashboard', function (req, res) {
    if (req.isAuthenticated()) {
        res.send('Logged In....')
    } else {
        res.redirect('login')
    }

})

// added auth checker code as middleware
// app.use('/api', auth_checker)   -------------------------disabled for developement purposes

app.get("/api/getexams", Exams)

app.post("/api/takeexam",Takeexam)

app.get('/api/getuser', function (req, res) {
    res.send(JSON.stringify(req.user))
    console.log(req.user)
})

app.post("/api/submit",submit)

app.get("/api/results",Results)

app.listen(3000, function () {
    console.log("server started on port 3000")
})
