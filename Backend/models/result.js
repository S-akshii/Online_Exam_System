const mongoose = require("mongoose")

// creating questionschema
const resultSchema = mongoose.Schema({
    userid: String,
    results: Array
})

// in results array 
// examid : String,
//     score: Number,
//     Time: String


//creating Question object
const Result = mongoose.model('Result', resultSchema)

module.exports = Result