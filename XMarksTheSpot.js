/*Given a two dimensional array, return the co-ordinates of 'x'.

The co-ordinates should be zero indexed.

You should assume you will always get an array as input.*/

const xMarksTheSpot = (input) => {
    let resultArray = [];
    let xCounter = 0;

    if (input.length == 0) {
        return resultArray;
    } else {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[i].length; j++) {
                if (input[i][j] == 'x') {
                    xCounter++;
                    resultArray = [i, j];
                }
            }
        }
    }

    return xCounter > 1 ? [] : resultArray;
}

const matrix = [
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
];

console.log(xMarksTheSpot([]));