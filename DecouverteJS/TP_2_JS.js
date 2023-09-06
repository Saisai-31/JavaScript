//Exercice 0
let prenom;
prenom = prompt("Entrer votre prénom");
document.write("Bonjour "+prenom);
console.log("Bonjour " +prenom);

//Exercice 1
let a = 75;
let b = 125;
let result = a + b;
alert("Le résultat est "+result);
console.log("Le résultat est "+result);

//Exercice 2
let maths = 8;
let francais = 15;
let hg = 17;
let moyenne = (maths+francais+hg)/3;
alert("la moyenne est "+moyenne);
console.log("la moyenne est "+moyenne);

//Exeercice 3
let budget = 100;
let achats = 150;
if (budget > achats){
    alert("Le budget permet de payer les achats");
    console.log("Le budget permet de payer les achats");
}else{
    alert("Le budget n'est pas suffisant pour payer les achats");
    console.log("Le budget n'est pas suffisant pour payer les achats");
}