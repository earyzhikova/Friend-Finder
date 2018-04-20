var express = require("express");
var path = require("path");
var friendsData = require("../data/friends.js");
// fstat.existsSync('../data/friends.js')
// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// JSON objects
module.exports = function(app, express){

  

app.get("/api/friends", function (req, res) {
  return res.json(friendsData);
});


app.post("/api/friends", function(req, res) {
  console.log(req.body);
  //save the data
  //compare the data
  //send comparison back to webpage as modal pop-up
  console.log("Array cleared.");
});
}


