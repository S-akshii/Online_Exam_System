const mongoose = require("mongoose")
const Exam = require("../models/exam")
const Question = require("../models/question")


ObjectId = mongoose.Types.ObjectId

function Takeexam(req, res) {
    // console.log(req.body)


    Exam.find({ _id: ObjectId(req.body.id) }, function (err, exam) {
        if (err) {
            console.log(err)
            res.send("internal error")
        }

        else {
            Question.find({ _id: { $in: exam[0].questions } } , "qun op1 op2 op3 op4", function (err, questionsdata) {
                res.send(questionsdata)
            })
        }
    })
}

module.exports = Takeexam
