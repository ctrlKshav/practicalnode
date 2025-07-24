const mongoose = require("mongoose");

const ExamCentre = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(ExamCentre);