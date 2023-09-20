if (confirm("Etes-vous prêt à commencer ?")){

    var nombreAléatoire = Math.floor(Math.random() * 101);
    console.log(nombreAléatoire);
    var coups = 0;
}
function jeux(){
    var val = document.getElementById("chiffre").value;
    console.log(val);
    while(true){
        coups++;
        
        if(val){
            if(val==nombreAléatoire){
                document.getElementById("result").value = ("Bravo tu a trouvé le chiffre en " + coups + " essai(s) !!");
                document.getElementById("result").style.color="red";
            break;
        }
        else if(val < nombreAléatoire){
            document.getElementById("result").value = ("C'est plus grand !");
            document.getElementById("result").style.color="blue";
            break;
        }
        else
            document.getElementById("result").value = ("C'est plus petit !");
            document.getElementById("result").style.color="green";
        break;
    }else{
        break;
    }
}
}
