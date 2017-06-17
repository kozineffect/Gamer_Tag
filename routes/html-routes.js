var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/user", function (req, res) {
    res.render("sign_up", db);
  });

  app.get("/", function (req, res) {
    res.render("index", db)
  });

  app.get("/tourney", function (req, res) {
    res.render("tourney", db);
  });
  app.get("/tourney_list", function (req, res) {
    res.render("tourn_list", db);
  });


  app.get("/createtourn", function (req, res) {
    res.render("create_tourn", db);
  });


  app.get("/profile", function (req, res) {
    res.render("GTProfile", db);
  });

};