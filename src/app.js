const express = require("express");
const cors = require("cors");
const mongo = require("mongoose")

const School = require("./models/School");
const College = require("./models/College");
const Playhouse = require("./models/Playhouse");
const ExamCentre = require("./models/ExamCentre");

const app = express();

app.use(express.json())
app.use(cors())

app.get("/health", (req, res) => {
    console.log("Working")
    const modelNames = mongo.modelNames()
    console.log(modelNames)
    res.send("Health Checked")
})

app.get("/institutes", (req, res) => {
    res.json({
        institutes: ["School", "College", "Playhouse", "Competitive Exam Centre"]
    })
})

app.post("/register-institute", async (req, res) => {
    const body = await req.body;
    console.log(body);
    
    const institute_name = body.institute
    switch(institute_name){
        case "School":
            console.log("one")
            break;
        
        case "College":
            console.log("two")
            break;

        case "Playhouse":
            console.log("three")
            break;

        case "Exam Centre":
            console.log("four")
            break;


        default:
            res.status(400).send("Incorrect Institute Type")
            break;
    }

    
    res.send("Got the Data")
})



module.exports = app;