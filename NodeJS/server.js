var express = require("express");
var app = express();

app.get("/", function (req, res){
    res.send("<html><button>Salut les amies !</button></html>");
    res.end();
});
app.listen(8080);
console.log("Serveur en marche");

