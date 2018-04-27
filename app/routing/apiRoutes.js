var express = require("express");
var path = require("path");
var friendsData = require("../data/friends.js");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// JSON objects
module.exports = function (app) {


  // list of friends entriies
  app.get("/api/friends", function (req, res) {
    console.log("get api route for friends fired");
    return res.json(friendsData);
  });

  // add new friend entries
  app.post("/api/friends", function (req, res) {
    console.log("post api route for friends fired");
    newFriend = req.body;
    //check if there is the first friend
    if(friendsData.length == 0){
      friendsData.push(newFriend);
      res.jsonp({"message": "You are the first user!"});
    }
    else { // else previous friend exists, compare to find close answers
      var newFriend = req.body;
      var bestMatch = userMatch(newFriend);
      // newFriend = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
      // console.log(newFriend);
  
      friendsData.push(newFriend);
      // console.log(bestMatch);
  
      res.jsonp({"message": "<p>Name: " + bestMatch.friendName + "<br>" + "Photo: <img src='" + bestMatch.friendPhoto + "' style='width:20%;height:20%' >" + "</p>"});
    }
    


  });

  //compare the data
  //send comparison back to webpage as modal pop-up
  //  display survey results
  function userMatch(newFriend) {
    // set scores

   var newFriendScore = newFriend.score;
  //  console.log(newFriend, userScores);
  
    var bestMatch;
    var lowestDifferenceSoFar = Infinity;
    var totalDifference;
          //all the friends - aka - for each friend
          for (var i = 0; i < friendsData.length; i++) {

            currentFriend = friendsData[i];
            console.log(`currentFriend.name`);
            var totalDifference = 0;
            //for each question (10)
            for (var j = 0; j < currentFriend.score.length; j++ ) {
              var currentFriendsScore = currentFriend.score[j];
              var currentNewFriendScore = newFriendScore[j];

              totalDifference += Math.abs(parseInt(currentNewFriendScore) - parseInt(currentFriendsScore));

            }

            if (totalDifference < lowestDifferenceSoFar) {
              bestMatch = friendsData[i];
              lowestDifferenceSoFar = totalDifference;
              // console.log(`userScores found at index ${i} is the current best with a diff of ${total}`);
            }
          }
      console.log("Best Match: " + bestMatch);
      return bestMatch;
  };
};
