const mongoose = require("mongoose");

const College = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(College);