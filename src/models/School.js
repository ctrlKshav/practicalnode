const mongoose = require("mongoose");

const School = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(School);