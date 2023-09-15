function airetriangle(){
    let largeur = parseInt(prompt("Entrez la largeur de triangle en cm"));
    let hauteur = parseInt(prompt("Entrez la hauteur de triangle en cm"));
    let hypotenuse = parseInt(prompt("Entrez l'hypotenuse de triangle en cm"));
        
    let result = (largeur * hauteur) / 2;
    alert("L'aire du triangle est : "+result+"cm²")
} 