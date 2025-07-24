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
    // const temp = mongo.models.school.findOne({name: "newSchool"})
    // console.dir(temp, {depth : 5})
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
    try{
        const body = await req.body;
        console.log(body);
        
        const institute_name = body.institute
        const name = body.name;
        switch(institute_name){
            case "School":
                try{
                    const board = body.board;
                    const medium = body.medium;
                    const class_category = body.class_category;
                    const standard = body.standard;
                    const subjects = body.subjects;
                }catch(err){
                    res.send(400).send("Incomplete Data")
                }

                mongo.models.school.insertOne({
                    name,
                    board,
                    medium,
                    class_category,
                    standard,
                    subjects
                })
                
                break;
            
            case "College":
                const degree_type = body.degree;
                mongo.models.college.insertOne({
                    name,
                    degree_type
                })
                break;

            case "Playhouse":
                const playhouse_type = body.playhouse_type;
                mongo.models.playhouse.insertOne({
                    name,
                    playhouse_type
                })
                break;

            case "Exam Centre":
                const exam_name = body.exam_name;
                try{
                    mongo.models.exam_centre.insertOne({
                        name,
                        exam_name
                    })
                }catch(err){
                    console.error(err)
                }
                break;


            default:
                res.status(400).send("Incorrect Institute Type")
                break;
        }

        res.send("Got the Data")
    }
    catch(err){
        res.status(500).send("Server Error")

    }
})



module.exports = app;