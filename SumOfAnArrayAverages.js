/*Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:

sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);
First, determine the average of each array. Then, return the sum of all the averages.*/

const sumAverage = (arr) => {
    let averagesArray = [];
    let averageResult = 0;

    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i].reduce((acc, current) => {
            return acc + current;
        });

        averagesArray.push(sum / arr[i].length);
    }

    averageResult = averagesArray.reduce((accum, current) => {
        return accum + current;
    });

    return Math.floor(averageResult);
}

console.log(sumAverage(
    [[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]
));