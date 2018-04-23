var express = require("express");
var path = require("path");
var friendsData = require("../data/friends.js");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// JSON objects
module.exports = function (app, express) {


  // list of friends entriies
  app.get("/api/friends", function (req, res) {
    console.log("get api route for friends fired");
    return res.json(friendsData);
  });

  // add new friend entries
  app.post("/api/friends", function (req, res) {
    console.log("post api route for friends fired");

    var newFriend = req.body;
    userMatch(newFriend, friendsData);
    // newFriend = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friendsData.push(newFriend);

    res.json(newFriend);


  });

  //compare the data
  //send comparison back to webpage as modal pop-up
  //  display survey results
  function userMatch(newFriend, friendsData) {
    // set scores

    var newUserScores = newFriend;
    var userScores = friendsData;


    var bestMatch;
    var lowestDiff = Infinity;
    console.log(userScores);

          for (var i = 0; i < userScores.length; i++) {
            console.log(`Loop through outer ${i}`);


            var total = 0;

            for (var j = 0; j < newUserScores.length; j++ ) {
              console.log(`Loop through inner of ${j}`);

              var diff = Math.abs(newUserScores[j] - userScores[i][j]);
              total += diff;
            }

        if (total < lowestDiff) {
          console.log(`userScores found at index ${i} is the current best with a diff of ${total}`);

          bestMatch = userScores[i];
          lowestDiff = total;
        }
      }
      console.log("Best Match: " + bestMatch);
  };
};