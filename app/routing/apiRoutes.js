var express = require("express");
var path = require("path");
var friendsData = require("../data/friends.js");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// JSON objects
module.exports = function(app, express){

  
// list of friends entriies
app.get("/api/friends", function (req, res) {
  console.log("get api route for friends fired");
  return res.json(friendsData);
});
 
// add new friend entries
app.post("/api/friends", function(req, res) {
  console.log("post api route for friends fired");
//   var newFriend = req.body;
  // console.log(req.body);
  friendsData.push(req.body);
  console.log(friendsData);

  //save the data
  //compare the data
  //send comparison back to webpage as modal pop-up

  


  // console.log("Array cleared.");
});
}


