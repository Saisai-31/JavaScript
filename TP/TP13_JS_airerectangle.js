function airerectangle(){
    let largeur = parseInt(prompt("Entrez la largeur du rectangle en cm"));
    let hauteur = parseInt(prompt("Entrez la hauteur du rectangle en cm"));

    let result = largeur * hauteur;
    alert(result > 0 ? "L'aire du rectangle est : "+result+"cm²" : "Veuillez entrer un nombre à largeur et longueur");
}