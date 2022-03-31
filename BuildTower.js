/*Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]*/

function towerBuilder(nFloors) {
    const result = [];
    let rowLength = nFloors * 2 - 1;
    let leftPadding = Math.floor(rowLength / 2);
    let rightPadding = Math.floor(rowLength / 2);
    let asteriskCounter = 1;

    for (let i = 0; i < nFloors; i++) {
        result.push(
            `${' '.repeat(leftPadding)}${'*'.repeat(
                asteriskCounter
            )}${' '.repeat(rightPadding)}`
        );
        asteriskCounter += 2;
        leftPadding--;
        rightPadding--;
    }

    return result;
}

console.log(towerBuilder(6));
