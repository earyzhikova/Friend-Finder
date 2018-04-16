var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.get("/api/friends", function (req, res) {
  return res.json(friends);
});


app.post("/api/friends", function(req, res) {
  friends = [];
  res.json(friends);
  console.log("Array cleared.");
});



app.listen(PORT, function() {
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});

