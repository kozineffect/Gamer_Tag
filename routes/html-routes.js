var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // index route loads view.html
  app.get("/user", function(req, res) {
    res.render("sign_up", db);
  });
   
   app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../index.html"));
    res.render("index", db);
  });

   app.get("/tourney", function(req, res) {
    res.render("tourney", db);
  });

     app.get("/createtourn", function(req, res) {
    res.render("create_tourn", db);
  });

     app.get("/tournlist", function(req, res) {
          res.render("tourn_list", db);
  });

};