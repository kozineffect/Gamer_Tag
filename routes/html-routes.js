var db = require("../models");

module.exports = function (app) {
  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("sign_up", db);
  });

   app.get("/tourney", function(req, res) {
    res.render("tourney", db);
  });

};