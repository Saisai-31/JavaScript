//Ex1
// let ht = Number(prompt("entrer le prix ht"));
// // let ttc = (20/ht) * 100;
// // let ttc = (20/ht) * 100;
// // let ttc = ht * 1.20;
// // let ttc = ht + ht * .2;
// let ttc = ht * 20 /100 + ht;

// document.write(" Le  montant de la tva est : " + ttc);

// //EX2
// let ht = Number(prompt("entrer le prix ht"));
// let tva = Number(prompt("entrer le taux tva"));
// let ttc = ht * tva /100 + ht;
// document.write(" Le  montant ttc est : " + ttc);

//EX03
// let prix = Number(prompt("entrer le prix ht"));
// let taux = Number(prompt("entrer le taux tva"));
// let ttc = prix * taux /100 + prix;
// if(ttc > 100){
//     ttc = "<span style ='color:red;'>" + ttc + "</span>";
//     document.write("le prix est : " + ttc + " supérieur à 100");

// }else{
//     ttc = "<span style ='color:green;'>" + ttc + "</span>";
//     document.write("le prix est : " + ttc + " inférieur à 100");
// }
// let prix1 = Number(prompt("Veuillez renseigner le prix HT"))
//         let tva = Number(prompt("Veuillez renseigner le taux de TVA en %"))
//         let ttc1 = (prix1+(prix1/100*tva))

//         if(ttc1>100){
//             ttca = new String(ttc1);
//             console.log(ttca);
//             document.write("Le prix TTC est " +ttca.fontcolor("#FF0000")+" €");
//         }

//          else{
//              ttca = new String(ttc1);
//              document.write("Le prix TTC est " +ttca.fontcolor("#00FF00")+" €");
//         }
        
        /*
            let ht = prompt("Montant");
            let ttc = ht * 1.2;
            document.body.innerText = ttc;
        */

        /*
            let prix_ht = prompt("Montant");
            let taux_tva = prompt("Taux de TVA ?");
            let taux_tva_calcul = (taux_tva / 100) + 1;
            let prix_ttc = ht * taux_tva_calcul;
            document.body.innerText = prix_ttc;
        */
       /*
        let ht_ = prompt("Montant HT ?");
        let taux_tva_ = prompt("Taux de TVA ?");
        let ttc_ = ht_ * (taux_tva_ / 100) + 1;
        if(ttc_ > 100){
            document.body.innerHTML = '<h1 style="color: red;">' + ttc_ + '</h1>';
        }else{
            document.body.innerHTML = '<h1 style="color: green;">' + ttc_ + '</h1>';

        }
       */

       let jour = Number(prompt("entre un chiffre entre 0 et "));
       switch (jour) {
        case 0:
            document.write("le chiffre sélectionné correspond à lundi");
            break;
        case 1:
            document.write("le chiffre sélectionné correspond à Mardi");
            break;
        case 2:
            document.write("le chiffre sélectionné correspond à Mercredi");
            break;
        case 3:
            document.write("le chiffre sélectionné correspond à Jeudi");
            break;
        case 4:
            document.write("le chiffre sélectionné correspond à Vendredi");
            break;
        case 5:
            document.write("le chiffre sélectionné correspond à Samedi");
            break;
        case 6:
            document.write("le chiffre sélectionné correspond à Dimanche");
            break;
            default:
                document.write("le chiffre ne correspond à aucun jour de la semaine.");
       }
