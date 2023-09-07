let monnaies = ["Euros", "Dollars américain", "Bitcoin"];
monnaies["EUR"]="Euros";
monnaies["USD"]="Dollars américains";
monnaies["BTC"]="Bitcoin";
console.table(monnaies);
console.log(monnaies.length);

let nom = "Cyril";
console.log(nom);
nom = "Maddie";
console.log(nom);

const age = 15;
console.log(age);
// age = 12;

console.log(typeof(nom));
console.log(typeof(age))


var mois = new Array(8);
    mois[0]="Janvier";
    mois[1]="Février";
    mois[2]="Mars";
    mois[3]="Avril";
    mois[4]="Mai";
    mois[5]="Juin";
    mois[6]="Juillet";
    mois[7]="Août";
console.log(mois);

    for(i=0; i<=mois.length; i++){
        console.log("Parcourir le tableau avec une boucle " +mois[i])
    }



