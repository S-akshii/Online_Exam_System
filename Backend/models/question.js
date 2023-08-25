const mongoose = require("mongoose")

// creating questionschema
const questionSchema = mongoose.Schema({
    qun: String,
    op1: String,
    op2: String,
    op3: String,
    op4: String,
    ans: Number
})

//creating Question object
const Question = mongoose.model('Question', questionSchema)

module.exports = Question