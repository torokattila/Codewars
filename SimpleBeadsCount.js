/*Two red beads are placed between every two blue beads. There are N blue beads. After looking at 
the arrangement below work out the number of red beads.*/

function countRedBeads(n) {
    let beadsCounter = 0;

    for (let i = 1; i < n; i++) {
        beadsCounter += 2;
    }

    return beadsCounter;
}

console.log(countRedBeads(5));