var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", function (req,res){
    res.sendFile(__dirname + "/formulairePost.html")
});
app.post("/recherche", function (req,res){
    res.send("reçu POST :" + req.body.nom)
});
app.listen(3305);
