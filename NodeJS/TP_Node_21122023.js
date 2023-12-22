const express = require("express");
const app = express();
// 1 - Créer un tableau et le filtrer en nombres pairs 
let monTableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrerPairs(numbers){
    return numbers.filter(num => num % 2 === 0);
}
let nombrePairs = filtrerPairs(monTableau);
console.log(nombrePairs);

// 2 - Je calcule la somme du tableau
//acc est un accumulateur et curr il représente l'élément actuel
//0 est le point de déppart
function calculerSomme(nbr) {
    return nbr.reduce((acc, curr) => acc + curr, 0);
}
let somme = calculerSomme(monTableau);
console.log(somme);

// 3 - rechercher le plus grand nombre du tableau avec 
//... qui est un opérateur de décomposition
function trouverMax(numbers) {
    return Math.max(...numbers);
}
let max = trouverMax(monTableau);
console.log(max);

// 4 - Fusionner 2 tableaux
monTableau2 = ["a", "b", "c", "d", "e"];
function fusionnerTableaux(tab1, tab2) {
    return [...tab1, ...tab2];
}
let fusion = fusionnerTableaux(monTableau, monTableau2);
console.log(fusion);

// 5 - Vérifier la présence d'un élément dans un tableau
function elementPresent(arr, element) {
    return arr.includes(element);
}
let element1 = 5;
let element2 = 25;
console.log(elementPresent(monTableau, element1));
console.log(elementPresent(monTableau, element2));

// 6 - Inverser un tableau
//slice fait une copie d'origine du tableau et reverse inverse l'ordre des éléments
function inverserTableau(arr) {
    return arr.slice().reverse();
}
let inverser = inverserTableau(monTableau);
console.log(inverser);

