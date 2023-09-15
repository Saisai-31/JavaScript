function volumecube(){
    let largeur = parseInt(prompt("Entrez la largeur du cube en cm"));
    let longueur = parseInt(prompt("Entrez la longueur du cube en cm"));
    let hauteur = parseInt(prompt("Entrez la hauteur du cube en cm"));

    let result = longueur * largeur * hauteur;
    alert("L'aire du rectangle est : "+result+"cm3")
}