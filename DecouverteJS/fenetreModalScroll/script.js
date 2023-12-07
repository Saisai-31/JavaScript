// Je sélectionne et je stocke la div modal-container
const modal = document.querySelector(".modal-container");
console.log(modal);

// Je sélectionne le boutton
const btn = document.querySelector(".btn.success");
console.log(btn);

// Je sélectionne le code 
const code = document.querySelector(".code");
console.log(code);

// Je sélectionne l'icone
const icone = document.querySelector(".fa-times");
console.log(icone);

window.addEventListener("scroll", displayModal);
function displayModal(){
    console.log('défilement détecté !');

    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'nombre de pixels depuis le haut de la page');
    if(hauteur > 400){
        console.log('Affichage de la modal');
        modal.style.display = "flex";
    }
}
btn.addEventListener('click', function(){
    console.log('icone cliquée');
    // Je rend visible le code
    modal.style.display = "block";
    //Je rend invisible le boutton
    modal.style.display = "none";
})

icone.addEventListener('click', function(){
    console.log('icone cliquée');
    // Je rend invisible la div modal-container
    modal.style.display = "none";
    //J'annule l'évènement 
    window.removeEventListener('scroll', displayModal);
})
