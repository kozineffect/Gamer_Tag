var db = require("../models");

module.exports = function(app){

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
    });
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