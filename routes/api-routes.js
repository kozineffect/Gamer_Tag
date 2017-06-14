var db = require("../models");

module.exports = function(app){

app.get("/api/users", function(req,res){
    db.user.findAll().then(function(dbuser){
        res.json(dbuser)
    });
});

app.post("/api/users", function (req,res){
   db.user.create(req.body).then(function(dbuser){
        res.json(dbuser);
    });
});

};