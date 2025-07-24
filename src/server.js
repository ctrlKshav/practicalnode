const app = require("./app");
const mongoose = require("mongoose");

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log("Server Started")
})
