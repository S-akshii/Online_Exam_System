const User = require("../models/user.js")
const passport = require('passport')

function Signup(req, res) {
    console.log(req.body.username)
    User.register({ username: req.body.username, email: req.body.username }, req.body.password, function (err, myuser) {
        if (err) {
            console.log(err);
            res.send('internal error')
        } else {
            passport.authenticate('local')(req, res, function () {
                // console.log(req)
                // res.redirect('/dashboard')


                payload = {
                    auth: true,
                    user: {
                        name: myuser.username,
                        email: myuser.username,
                        id: myuser.id
                    }
                }
                res.send(payload)


            })
        }
    })
}

module.exports = Signup