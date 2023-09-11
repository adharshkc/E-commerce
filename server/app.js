const express = require("express");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

//importing routes
const user = require("./controller/user.js");
app.use("/", user);
app.use(ErrorHandler);

app.use("/api/v2/user", user);

module.exports = app;
