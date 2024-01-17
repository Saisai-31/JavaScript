var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/img/oiseau1", function (req, res) {
    res.sendFile(__dirname + "/img/oiseau1");
});

app.get("/img/oiseau2", function (req, res) {
    res.sendFile(__dirname + "/img/oiseau2");
});

app.listen(4005);