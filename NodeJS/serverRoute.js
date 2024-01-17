// Une application avec deux pages. La page d'accueil contient un lien vers la seconde page 
var express = require("express");
var app = express();

app.get("/", function(req, res){
    // La page contient un titre et un lien hypertexte relatif vers la seconde page
    res.send("<h1>Bienvenue ! </h1><br><a href='/a'> page A </a>");
    res.end();

});
// La seconde route , accessible a l'adresse http://localhost:4003/a
app.get("/a", function(res,res){
    res.send("<h1>Page A</h1>" );
    res.end();

});
// Gestion des erreurs 404
app.use(function(req, res){
    res.status(404).send("404 : la page n'hexiste pas ")
})


app.listen(4003);
console.log("serveur en marche")