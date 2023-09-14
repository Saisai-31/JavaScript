var note = new Array();
var moyenne = 0;
var nb;
nb = prompt("Entrez un nombre");
nb = parseInt(nb,10);
for(i=0; i<5;i++){
    note[i]=prompt("Entrez la note de " + (i+1));
    note[i] = parseInt(note[i],10);
    moyenne += note[i];
}
moyenne = moyenne / nb;
alert("La moyenne est " + moyenne);
console.log("Les notes entrées : " + note );
console.log("La moyenne est " + moyenne);
