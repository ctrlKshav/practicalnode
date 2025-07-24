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

app.get("/institutes/school", (req, res) => {
    res.json({
        institute: "School",
        boards: ["GSEB", "CBSE", "GTU"],
        mediums: ["English", "Hindi", "Gujarati"],
        classes: [
            {
                class_category: "Pre-primary",
                standards: ['LKG', 'HKG'],
                subjects: ["Drawing", "Arts"]
            },
            {
                class_category: "Primary",
                standards: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
                subjects: ["English", "Maths", "Science", "Social Science", "Gujarati", "Hindi", "Music"]
            },
            {
                class_category: "Secondary",
                standards: ["9th", "10th"],
                subjects: ["English", "Maths", "Science", "Social Science", "Gujarati", "Hindi", "Sanskrit", "Computer"]
            },
            {
                class_category: "Higher Secondary",
                standards: ['11th', '12th'],
                subjects: ["English", "Maths", "Physics", "Chemistry"]
            },
        ]
    })
})

app.get("/institutes/college", (req, res) => {
    res.json({
        institute: "College",
        degrees: ["Bachelors", "Masters"]
    })
})

app.get("/institutes/playhouse", (req, res) => {
    res.json({
        institute: "Playhouse",
        playhouse_type: ["Playhouse", "Nursery"]
    })
})

app.get("/institutes/exam-centre", (req, res) => {
    res.json({
        institute: "Exam Centre",
        exam: ["JEE", "NEET", "CUET", "NDA"]
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