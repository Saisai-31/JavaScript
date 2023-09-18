function volumecube(){
    let largeur = parseInt(prompt("Entrez la largeur du cube en cm"));
    let longueur = parseInt(prompt("Entrez la longueur du cube en cm"));
    let hauteur = parseInt(prompt("Entrez la hauteur du cube en cm"));

    let result = longueur * largeur * hauteur;
    alert(result > 0 ? "L'aire du cube est : "+result+"cm²" : "Veuillez entrer un nombre à largeur, longueur et la hauteur");
}