const mongoose = require("mongoose");

const ExamCentre = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exam_type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("exam_Centre", ExamCentre);