var db = require("../models");

module.exports = function (app) {
  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("create_user", db);
  });

};