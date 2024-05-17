// Puzzle 1

// game loop
while (true) {
    var enemy1 = readline(); // name of enemy 1
    var dist1 = parseInt(readline()); // distance to enemy 1
    var enemy2 = readline(); // name of enemy 2
    var dist2 = parseInt(readline()); // distance to enemy 2

    // Write an action using console.log()
    
    // Enter the code here
    if (dist1 < dist2) {
        console.log(enemy1);
    } else {
        console.log(enemy2);
    }
    
}

// Puzzle 2
// game loop
while (true) {
    let max = 0;
    let imax = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        if (mountainH > max){
            max = mountainH
            imax = i
        }
    }
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    console.log(imax);     // The index of the mountain to fire on.
}


// EXERCICE TEMPERATURE

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// "2" ---> 2
const n = parseInt(readline()); // the number of temperatures 
// to analyse
let tTempPos = 5526;
let tTempNeg = -273;
let result = 0;

// imputs est un tableau de chaine de caractères

// readline() va récupérer une chaine de caractèe 
//comportant des nombres séparés par des espaces

// split(' ') va découper la chaine de caractère à 
// chaque fois qu'il trouve un espace

// imputs est un tableau qui va récupérer des nombres 
// sous forme de chaine de caractères
// "2 -36 5 -15" ---> ["2", "-36", "5", "-15"]
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    // convertir une chaine de caractère en nombre
    // "2" ---> 2
    // i va prendre la valeur du tableau ex : imputs[0] = "2"
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    // si t est positif et plus petit que la valeur temporaire positive
    // la valeur temporaire positive sera égale à t
    if((t < tTempPos) && t > 0){
        tTempPos = t;
    }
    // si t est négatif et plus grand que la valeur temporaire négative
    // la valeur temporaire négative sera égale à t
    if((t > tTempNeg) && t < 0){
        tTempNeg = t;
    }
    
    // si la valeur temporaire positive est inférieure ou égale 
    // à la valeur temporaire négative multiplié par -1
    // alors result prend la valeur temporaire positive
    // sinon elle prend la valeur temporaire négative
    // si j'ai un tableau vide, la valeur de result est de 0
    if (tTempPos <= tTempNeg * -1){
        result = tTempPos;
    }else{
        result = tTempNeg;
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);

// EXERCICE CHEVAUX DE COURSE

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let horses = [];
// valeur maximale possible : 10000000
let diff = 10000000;
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    // façon 1
    horses[i] = pi;
    // façon 2
    //horses.push(pi);
}
// permet de trier un tableau dans l'ordre
horses.sort((a, b) => a - b);
for (let i = 0; i < N - 1; i++){
    // temp permet de récupérer une valeur temporaire
    // Math.abs() permet de récupérer la valeur valeur absolue
    // ex:  la valeur absolu de -8 est 8
    let temp = Math.abs(horses[i] - horses[i+1]);
    // si la valeur de temp est plus petite que diff alors diff 
    // prend la valeur de temp
    if(diff > temp){
        diff = temp;
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(diff);