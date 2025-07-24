const mongoose = require("mongoose");

const School = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    board: {
        type: String,
        required: true
    },
    medium: {
        type: String,
        required: true
    },
    class_category: {
        type: String,
        required: true
    },
    standard: {
        type: String,
        required: true
    },
    subjects: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("school", School);