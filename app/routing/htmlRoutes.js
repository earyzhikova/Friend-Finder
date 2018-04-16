var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  });