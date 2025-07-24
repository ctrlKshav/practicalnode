const mongoose = require("mongoose");

const ExamCentre = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exam_name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("exam_centre", ExamCentre);