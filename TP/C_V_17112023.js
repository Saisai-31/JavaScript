//Q1: Variables et opérateurs
//Additionne x et y, puis multiplie le résultat par 2
let x = 5;
let y = 2;
let z = x +y;
console.log("l'addition de x et y donne le résultat suivant : "+z );
document.write("l'addition de x et y donne le résultat suivant : "+z + "<br>");
z *= 2;
console.log("Cette somme x2 donne le résultat suivant : "+z);
document.write("Cette somme x2 donne le résultat suivant :\n "+z+ "<br><br>");


//Q2: Structures de contrôle
//let num = 15; Vérifie si num est pair ou impair et affiche le résultat
let num = 15;
if(num %2 === 0){
    console.log("Le nombre est pair.");
    document.write("Le monbre est pair <br>");
}else{
    console.log("Le nombre est impair.");
    document.write("Le monbre est impair <br><br>");
}


//Q3: Tableaux
//let fruits = ["pomme", "orange", "banane"]; 
//Ajoute "raisin" à la fin du tableau et affiche la nouvelle longueur du tableau
let fruits = ["pomme", "orange", "banane"];
console.log("La taille du tableau est de : " + fruits.length);
console.log(fruits);
document.write("La taille du tableau est de : " + fruits.length + "<br>");
document.write(fruits + "<br>");

fruits.push("raisin");
console.log("La taille du tableau est de : " + fruits.length);
console.log(fruits);
document.write("La taille du tableau est de : " + fruits.length + "<br>");
document.write(fruits + "<br><br>");


//Q4: Fonctions
//Crée une fonction qui prend deux paramètres et retourne leur somme
function addition(a,b){
    let c = a + b;
    return c;
}
console.log(addition(5,3));
document.write("La somme de cette fonction est de : " + addition(5,3)+"<br><br>");


//Q5: Boucles
//Utilise une boucle for pour afficher les nombres de 1 à 5
for(i = 1; i < 6; i++){
console.log(i);
document.write(i + " ");
}


//Q6:Manipulation des chaines de caractères 
//let phrase = "Bonjour, comment ça va ?"; 
//Affiche la longueur de la phrase et la version en majuscules
let phrase = "Bonjour, comment ça va ?";
console.log("Ma phrase est : " + phrase);
document.write("<br><br> Ma phrase est : " + phrase + "<br>")
console.log("La longueur de ma phrase est de : " + phrase.length);
document.write("La longueur de ma phrase est de : " + phrase.length + "<br>");
console.log(phrase.toUpperCase());
document.write(phrase.toUpperCase()+"<br><br>")


//Q7: Manipulation des dates
//Affiche la date d'aujourd'hui au format "jour/mois/année"
//J'utilise l'objet date et ses méthodes pour obtenir la date et la concaténer dans le bon format
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // Les mois commencent à partir de 0, donc on ajoute 1
let year = today.getFullYear();

// Formatage pour obtenir le format "jour/mois/année"
let formattedDate = day + '/' + month + '/' + year;

console.log("La date d'aujourd'hui est : " + formattedDate); 
document.write("La date d'aujourd'hui est : " + formattedDate + "<br><br>"); 

// On commence par créer quelque chose qui s'appelle today. C'est comme une boîte spéciale où on met toutes les informations sur la date d'aujourd'hui.

// Ensuite, on regarde dans cette boîte (today) pour trouver le numéro du jour d'aujourd'hui. Par exemple, si aujourd'hui c'est le 17, on écrit le numéro 17 dans une autre boîte qu'on appelle day.

// Ensuite, on regarde encore dans la boîte today, mais cette fois pour trouver le numéro du mois. Mais attention, les mois commencent à partir de zéro, donc on doit ajouter 1 au numéro qu'on trouve pour que ça soit juste. Si c'est novembre (le 11ème mois), on va mettre 11 + 1 = 12 dans une autre boîte qu'on appelle month.

// Puis, on cherche dans la boîte today pour trouver l'année. Par exemple, si on est en 2023, on met le numéro 2023 dans une autre boîte qu'on appelle year.

// Maintenant, on veut écrire la date d'une façon spéciale. On prend les nombres qu'on a mis dans les boîtes day, month, et year, et on les met dans un ordre spécial en ajoutant des / entre eux pour qu'ils soient bien séparés. C'est comme mettre des ingrédients dans un plat pour le rendre joli.

// Enfin, on veut montrer cette date qu'on a mise dans un ordre spécial. On la montre d'abord dans une fenêtre spéciale qu'on appelle la console (c'est un peu comme parler à l'ordinateur), puis on la montre aussi sur une feuille (c'est comme écrire sur une feuille de papier).

// Voilà ! C'est comme si on prenait des bouts d'informations sur la date, on les arrange d'une façon particulière et on les montre ensuite pour que tout le monde puisse les voir.


//Q8: Manipulation d'Array
//Filtrage, let numbers = [8, 15, 22, 30, 18]; Filtrer les nombres pairs et afficher le résultat
let numbers = [8, 15, 22, 30, 18];
let filtrerNumbers = numbers.filter(function (number){
    return number %2 === 0;
})
document.write("Le tableau : " + numbers);
document.write("<br>Le tableau filtrer par nombre pair : " + filtrerNumbers + "<br><br>");


//Q9: Manipulation d'Array
//Réduction, Calculer la somme des éléments dans le tableau numbers (cf.Q8)
document.write("Avec une boucle for : <br");
let sum =0;
for(i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log("La somme des éléments du tableau est : " + sum);
document.write("La somme des éléments du tableau est : " + sum);

//Avec reduce : La méthode reduce() boucle sur le tableau et appelle la fonction reducer pour stocker la valeur du calcul du tableau par la fonction dans un accumulateur. Un accumulateur est une variable mémorisée tout au long de toutes les itérations pour stocker les résultats accumulés de la boucle dans un tableau. Nous pouvons l’utiliser pour parcourir le tableau, ajouter la valeur de l’élément à l’accumulateur et obtenir la somme du tableau.
let somme = numbers.reduce((accumulateur, valeurActuelle) => accumulateur + valeurActuelle, 0);
console.log("La somme des éléments du tableau est : " + somme);
document.write("La somme des éléments du tableau est : " + somme);

//Tout d’abord, qu’est-ce qu’un « Reducer » ? Il s’agit simplement d’une fonction qui exécute une « réduction » d’un tableau JS. C’est-à-dire qui peut transformer un tableau en une seule et unique valeur qui dépend du contenu du tableau.
// Pour cela, cette méthode va parcourir chaque élément du tableau (dans l’ordre), et exécuter une fonction dessus en utilisant une variable qui va pouvoir évoluer au fil des itérations.