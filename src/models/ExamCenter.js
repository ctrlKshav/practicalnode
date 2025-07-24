const mongoose = require("mongoose");

const ExamCenter = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exam_type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("exam_center", ExamCenter);