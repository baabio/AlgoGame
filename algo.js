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
