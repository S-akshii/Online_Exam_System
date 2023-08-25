const mongoose = require("mongoose")

// creating submissionschema
const submissionSchema = mongoose.Schema({
    userid: String,
    submissions: Array
})

//creating User object
const Submission = mongoose.model('Submission',submissionSchema)

module.exports = Submission