// on affiches les éléments du tableau

notes = [["jean", 15, "Paris"], ["Marc", 12, "londres"], ["Marie" , 17, "Tokyo"]];
for(let i = 0; i < notes.length; i++){
    console.log(notes[i][0], "a eu " ,notes[i][1], "et vit à ", notes[i][2],".");
    // [i][0] => 1ére element de l' élément de la liste choisi
    // [i][1] => 2ére element de l'élément de la liste choisi
    // [i][2] => 3éme élement de l'élément de la liste choisi
}

// afficher la + grd valeur entre 2 ds un tableau multidimensionel

let nombres = [[0, 18],[1, 45],[45, 48],[-3, 2]];
for(let i = 0; i < nombres.length; i++){
    if( nombres[i][0] < nombres[i][1]){
        console.log(nombres[i][1]);
    } else {
        console.log(nombres[i][0]);
    }
}