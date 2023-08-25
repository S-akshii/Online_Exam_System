
const User = require("../models/user")
const passport = require('passport')

function Login(req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    req.login(user, function (err) {
        if (err) {
            console.log(error)

        } else {
            passport.authenticate('local')(req, res, function () {
                const myuser = req.user
                payload = {
                    auth: true,
                    user: {
                        name: myuser.username,
                        email: myuser.username,
                        id: myuser.id
                    }
                }
                res.send(payload)
                // res.redirect('/dashboard')
            })
        }
    })
}


module.exports = Login