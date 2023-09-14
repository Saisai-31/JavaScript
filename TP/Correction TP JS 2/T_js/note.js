var note = new Array();
2 var moyenne = 0;
3 var nb;
4
5 nb = prompt("Entrer le nombre de notes");
6 nb = parseInt(nb,10);
7 for (var i=0;i<nb;i++){
8 note[i] = prompt("Entrer la note " + (i+1));
9 note[i] = parseInt(note[i],10);
10 moyenne += note[i];
11 }
12
13 moyenne = moyenne / nb;
14 alert("La moyenne est " + moyenne);