var db = require("../models");

var passport = require("../config/passport");

module.exports = function(app){


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/tourney");
  });

 
//getting information from database and sending it to api/users
app.get("/api/users", function(req,res){
    db.user.findAll().then(function(dbuser){
        res.json(dbuser)
    });
});
//getting information submitted by user on page and sending it to database
app.post("/api/users", function (req,res){
   db.user.create(req.body).then(function(dbuser){
        res.json(dbuser);
    })
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });


app.get("/api/tournament", function(req,res){
    db.tournament.findAll().then(function(dbuser){
        res.json(dbuser)
    });
});

app.post("/api/tournament", function (req,res){
    console.log(req.body);
   db.tournament.create(req.body).then(function(dbuser){
        res.json(dbuser);
    });
});

};