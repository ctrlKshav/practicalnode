const express = require("express");
const cors = require("cors");
const mongo = require("mongoose")

const School = require("./models/School");
const College = require("./models/College");
const Playhouse = require("./models/Playhouse");
const ExamCenter = require("./models/ExamCenter");

const app = express();

app.use(express.json())
app.use(cors())

app.get("/health", (req, res) => {
    console.log("Working")
    const modelNames = mongo.modelNames()
    console.log(modelNames)
    res.send("Health Checked")
})



module.exports = app;