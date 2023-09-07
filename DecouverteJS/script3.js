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


// var mois = new Array(8);
//     mois[0]="Janvier";
//     mois[1]="Février";
//     mois[2]="Mars";
//     mois[3]="Avril";
//     mois[4]="Mai";
//     mois[5]="Juin";
//     mois[6]="Juillet";
//     mois[7]="Août";
// console.log(mois);

//     for(i=0; i<mois.length; i++){
//         console.log("Parcourir le tableau avec une boucle " +mois[i]);
//         document.write(mois[i]);
//     }

    // const monTab = []; //la constante n'est pas utile car dans un tableau est reste une variable modifiable, ultiliser let pour un tableau
    //     monTab[0]="Lundi";
    //     monTab[1]="Mardi";
    //     monTab[2]="Mercredi";
    //     monTab[3]="Jeudi";
    //     monTab[4]="Vendredi";
    //     monTab[5]="Samedi";
    //     monTab[6]="Dimanche";

    // for(i=0; i<monTab.length; i++){
    //     console.log("Parcourir le tableau avec une boucle " +monTab[i]);
    //     document.write(monTab[i]);
    // }

    //Générer un boucle for avec 7 chiffres aléatoires
for(i=0; i<7; i++){
console.log(Math.random());
}

 //Générer un boucle while avec 7 chiffres aléatoires
let z = 0;
while(z<7){
    console.log(Math.random());
    z++;
}

//Utilisation du switch
let a = Number(prompt("entrez un chiffre"));
switch (a) {
    case 0:
        console.log('a est égal à 0');
        break;
    case 1:
        console.log('a est égal à 1');
        break;
    case 2:
        console.log('a est égal à 2');
        break;
    case 3:
        console.log('a est égal à 3');
        break;
    default:
        console.log('a est égal à autre chose');
}
