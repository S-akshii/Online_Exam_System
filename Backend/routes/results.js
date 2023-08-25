const mongoose = require("mongoose")
const Result = require("../models/result")




function Results(req, res) {
    // res.send('you will get exams')
    Result.findOne({ userid: req.user._id } ,function (err, scores) {
        // console.log(exams)
        res.send(scores.results)
        // .sort(function compareFn(a, b) { return a.time < b.time })
    })

}

module.exports = Results