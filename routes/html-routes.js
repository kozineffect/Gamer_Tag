var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // index route loads view.html
  app.get("/user", function(req, res) {
    res.render("sign_up", db);
  });
   
   app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

   app.get("/tourney", function(req, res) {
    res.render("tourney", db);
  });

};