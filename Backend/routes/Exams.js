const mongoose = require("mongoose")
const Exam = require("../models/exam")



function Exams(req, res) {
    // res.send('you will get exams')
    Exam.find(function (err, exams) {
        // console.log(exams)
        res.send(exams)
    })

}

module.exports = Exams