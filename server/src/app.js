const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// MongoDB interface
mongoose.connect("mongodb://localhost:27017/posts");
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection Succeeded");
});

// Routing
var cellar = require("./routes/cellar");
app.use("/cellar", cellar);

// Port opening
app.listen(process.env.PORT || 8081);
