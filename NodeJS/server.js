var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("<html><button>Holà amigo compeon del mundo</button></html>");
    res.send();
})

app.listen(3300);
console.log("Serveur en marche");

