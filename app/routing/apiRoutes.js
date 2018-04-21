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
  return res.json(friendsData);
  console.log("get api route for friends fired");
});
 
// add new friend entries
app.post("/api/friends", function(req, res) {
  console.log("post api route for friends fired");
//   var newFriend = req.body;
  // console.log(req.body);
  friendsData.push(req.body);
  console.log(friendsData);

  
//   console.log('newFriend ='+JSON.stringify(newFriend));

//   var friendResponses = newFriend.score;
//   console.log('friendResponses =' + friendResponses);

//   var matchName = "";
//   var matchImage = "";
//   var diffTotal = 50000;

//   for(var i = 0; i <friendsData.length; i++){
//     console.log("friend = " + JSONstringify(friends[i]));

//     var diff = 0;
// for(var j = 0; j < friendResponses.length; i++){
//   diff += Math.abs(friendsData[i].scores[j] - friendResponses[j]);

//   console.log('diff = ' + diff);

//   if(diff < diffTotal) {
//     console.log("Match found = " + diff);
//     console.log("Name = " + friendsData[i].friendName);
//     console.log("Image = "+ friendsData[i].friendImage);

//     diffTotal = diff;
//     matchName = friendsData[i].friendName;
//     matchImage = friendsData[i].friendImage;
//   }
// }
// friendsData.push(newFriend);

// res.json({status:"OK", matchName: matchName, matchImage: matchImage });
// }
  

  //save the data
  //compare the data
  //send comparison back to webpage as modal pop-up

  


  // console.log("Array cleared.");
});
}


