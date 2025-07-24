const mongoose = require("mongoose");

const Playhouse = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(Playhouse);