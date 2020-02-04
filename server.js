// Setup Dependencies
// DO I NEED Mongojs???
const mongojs = require("mongojs");
// let bodyParser = require("body-parser"); // Post Body Request
// let exphbs = require("express-handlebars");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// scraper
const cheerio = require("cheerio");
const axios = require("axios");

const db = require("./models");

//express init
const app = express();

// listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("port in use ... " + port);
});

// middleware congig ...

// use morgan for logging requests
app.use(logger("dev"));

// Parse request body as JSON
// I guess bodyparser is no longer needed since it's included in express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// follow Trav Media from 5:27 to make mongo database and use code I found on GH ... then take it from there.
