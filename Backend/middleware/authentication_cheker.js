
module.exports = function (req, res, next) {
    if (req.isAuthenticated()) {
        console.log('authenticated')
        return next()
    }
    else {
        res.send('Unauthorised Request')
    }
}

