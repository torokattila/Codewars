/*If both values in (x) are numbers, the score is the sum of the two. If only one is a number, 
the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as 
(x) and the number of sub arrays should be equal to the score.*/

function explode(x) {
    let scoreArray = [];

    if (typeof x[0] != 'number' && typeof x[1] != 'number') {
        return 'Void!';
    } else {
        if (typeof x[0] == 'number' && typeof x[1] == 'number') {
            let scoreSum = x[0] + x[1];

            for (let i = 0; i < scoreSum; i++) {
                scoreArray.push([x[0], x[1]]);
            }
        } else if (typeof x[0] != 'number' && typeof x[1] == 'number') {

            for (let i = 0; i < x[1]; i++) {
                scoreArray.push([x[0], x[1]]);
            }
        } else if (typeof x[0] == 'number' && typeof x[1] != 'number') {
            
            for (let i = 0; i < x[0]; i++) {
                scoreArray.push([x[0], x[1]]);
            }
        }
    }

    return scoreArray;
}

console.log(explode(['a', 3]))