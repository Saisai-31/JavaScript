var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/formulaire.html");
});

app.get("/recherche", function (req, res){
    var data = req.query.nom;

    res.send("<h1> Vous avez tapé "+ data + "</h1>");
    res.end();
});

app.listen(4006);