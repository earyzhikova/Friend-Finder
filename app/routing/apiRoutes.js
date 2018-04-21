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
  var newFriend = req.body;
  console.log(req.body);
  
    // newFriend = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friendsData.push(newFriend);

    res.json(newFriend);
  // friendsData.push(req.body);
  // console.log(friendsData);

  //save the data
  //compare the data
  //send comparison back to webpage as modal pop-up

  // var friendsData = newFriend.score;
  // console.log('friendsData =' + friendsData);

//   var matchName = "";
//   var matchImage = "";
//   var diffTotal = infinity;

//   for(var i = 0; i <friendsData.length; i++){
//     console.log("friend = " + JSONstringify(friendsData[i]));

//     var diff = 0;
// for(var j = 0; j < friendsData.length; i++){
//   diff += Math.abs(friendsData[i].score[j] - friendsData[j]);


//   console.log('diff = ' + diff);

//   if(diff < diffTotal) {
//     console.log("Match found = " + diff);
//     console.log("Name = " + friendsData[i].friendsData);
//     console.log("Image = "+ friendsData[i].friendImage);

//     diffTotal = diff;
//     matchName = friendsData[i].friendName;
//     matchImage = friendsData[i].friendImage;
//   }
// }
// friendsData.push(newFriend);

// res.json({ matchName: matchName, matchImage: matchImage });
// }
  



  // console.log("Array cleared.");
});
}


