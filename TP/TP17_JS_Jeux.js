
var nombreAléatoire;
    var coups;

    function initialiserJeu() {
      if (confirm("Etes-vous prêt à commencer ?")) {
        nombreAléatoire = Math.floor(Math.random() * 101);
        console.log(nombreAléatoire);
        coups = 0;
        document.getElementById("result").value = ""; // Réinitialiser le champ de résultat
      }
    }

    function jeux() {
      var val = parseInt(document.getElementById("chiffre").value);

      if (!isNaN(val)) {
        coups++;

        if (val === nombreAléatoire) {
          document.getElementById("result").value = "Bravo tu as trouvé le chiffre en " + coups + " essai(s) !!";
          document.getElementById("result").style.color = "red";
        } else if (val < nombreAléatoire) {
          document.getElementById("result").value = "C'est plus grand !";
          document.getElementById("result").style.color = "blue";
        } else {
          document.getElementById("result").value = "C'est plus petit !";
          document.getElementById("result").style.color = "green";
        }
      }
    }

    function rejouer() {
      document.getElementById("chiffre").value = ""; // Réinitialiser le champ de saisie
      initialiserJeu();
    }

    // Appeler initialiserJeu() pour commencer le jeu
    initialiserJeu();
