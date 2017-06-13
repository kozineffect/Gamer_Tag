var db = require("../models");

module.exports = function(app){

app.get("/api/users", function(req,res){
    db.user.findAll({}).then(function(dbuser){
        res.json(dbuser)
    });
});

app.post("/api/users", function (req,res){
    db.user.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        // verified: req.body.verified,
        username: req.body.username,
        password: req.body.password,
        consoles: req.body.consoles,
        Genres: req.body.Genres,
        FavGame1: req.body.FavGame1,
        FavGame2: req.body.FavGame2,
        FavGame3: req.body.FavGame3,
        zipcode: req.body.zipcode,
        date_created: req.body.date_created


    }).then(function(dbuser){
        res.json(dbuser);
    });
});

};