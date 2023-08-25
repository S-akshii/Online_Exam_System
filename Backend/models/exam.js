const mongoose = require("mongoose")

// creating userschema
const examSchema = mongoose.Schema({
    title: String,
    questions: Array
})

//creating User object
const Exam = mongoose.model('Exam', examSchema)

module.exports = Exam