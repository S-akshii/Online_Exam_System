const Result = require("../models/result");
const Submission = require("../models/submission");

function submit(req, res) {
    ///////// have to change the response sent at some point.
    console.log(req.body)
    res.send("ok")

    console.log(req.user._id)
    Submission.findOneAndUpdate({ userid: req.user._id }, {  $push: { submissions: req.body} }, {
        upsert: true,
        new: true,
        // setDefaultsOnInsert: true

    },function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    });

    data = {
        examid: req.body.examid,
        score: 10,
        time: Date.now()
    }

    Result.findOneAndUpdate({ userid: req.user._id }, { $push: { results: data} }, {
        upsert: true,
        new: true,
        // setDefaultsOnInsert: true

    },function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    });

    


}

module.exports = submit
