const app = require("./app");

require('dotenv').config()

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log("Server Started")
})
