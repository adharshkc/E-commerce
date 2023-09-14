const express = require("express");
const bodyParser = require("body-parser");
// const ErrorHandler = require("./middleware/error");
const userRoutes = require('./routes/user') 

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.get('/', (req, res)=>{
    res.send('home')
})
app.use('/', userRoutes)

module.exports = app;
