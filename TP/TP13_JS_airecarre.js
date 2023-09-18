function airecarre(){
    let largeur = parseInt(prompt("Entrez la taille d'un côté en cm"));

    let result = largeur * largeur;
    alert(result > 0 ? "L'aire du carré est : "+result+"cm²" : "Veuillez entrer un nombre à largeur");
}