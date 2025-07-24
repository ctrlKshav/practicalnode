const logger = (req, res, next) => {
    console.log("Request Recieved at")
    console.log(req.url)
    next();
}

module.exports = logger;