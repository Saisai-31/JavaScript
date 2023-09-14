const jour = prompt("Entrez un jour de la semaine");
switch(jour){
    case "Lundi": 
         console.log('Vous avez entré : Lundi');
        break;
    case "Mardi": 
        console.log('Vous avez entré : Mardi');
        break;
    case "Mercredi": 
        console.log("Vous avez entré : Mercredi");
        break;
    case "Jeudi": 
        console.log("Vous avez entré : Jeudi");
        break;
    case "Vendredi": 
        console.log("Vous avez entré : Vendredi");
        break;
    case "Samedi": 
        console.log("Vous avez entré : Samedi");
        break;
    case "Dimanche": 
        console.log("Vous avez entré : Dimanche");
        break;
    default:
        console.log('Cette valeur n\'existe pas');
}
