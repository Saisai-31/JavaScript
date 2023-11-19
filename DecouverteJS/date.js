//Affiche la date d'aujourd'hui au format "jour/mois/année"
//J'utilise l'objet date et ses méthodes pour obtenir la date et la concaténer dans le bon format
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // Les mois commencent à partir de 0, donc on ajoute 1
let year = today.getFullYear();

// Formatage pour obtenir le format "jour/mois/année"
let formattedDate = day + '/' + month + '/' + year;

console.log(formattedDate); 
document.write(formattedDate + "<br><br>"); 

// On commence par créer quelque chose qui s'appelle today. C'est comme une boîte spéciale où on met toutes les informations sur la date d'aujourd'hui.

// Ensuite, on regarde dans cette boîte (today) pour trouver le numéro du jour d'aujourd'hui. Par exemple, si aujourd'hui c'est le 17, on écrit le numéro 17 dans une autre boîte qu'on appelle day.

// Ensuite, on regarde encore dans la boîte today, mais cette fois pour trouver le numéro du mois. Mais attention, les mois commencent à partir de zéro, donc on doit ajouter 1 au numéro qu'on trouve pour que ça soit juste. Si c'est novembre (le 11ème mois), on va mettre 11 + 1 = 12 dans une autre boîte qu'on appelle month.

// Puis, on cherche dans la boîte today pour trouver l'année. Par exemple, si on est en 2023, on met le numéro 2023 dans une autre boîte qu'on appelle year.

// Maintenant, on veut écrire la date d'une façon spéciale. On prend les nombres qu'on a mis dans les boîtes day, month, et year, et on les met dans un ordre spécial en ajoutant des / entre eux pour qu'ils soient bien séparés. C'est comme mettre des ingrédients dans un plat pour le rendre joli.

// Enfin, on veut montrer cette date qu'on a mise dans un ordre spécial. On la montre d'abord dans une fenêtre spéciale qu'on appelle la console (c'est un peu comme parler à l'ordinateur), puis on la montre aussi sur une feuille (c'est comme écrire sur une feuille de papier).

// Voilà ! C'est comme si on prenait des bouts d'informations sur la date, on les arrange d'une façon particulière et on les montre ensuite pour que tout le monde puisse les voir.