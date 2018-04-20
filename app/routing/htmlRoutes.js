var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();



// app.get("/survey", function (req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });

module.exports = function(app, express){
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}
