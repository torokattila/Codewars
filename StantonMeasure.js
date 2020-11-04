/*The Stanton measure of an array is computed as follows: count the number of 1s in the array. 
Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.*/

function stantonMeasure(array) {
    let oneCounter = 0;
    let counterCounter = 0;

    array.forEach(number => {
        if (number == 1) {
            oneCounter++;
        }
    });

    array.forEach(number => {
        if (number == oneCounter) {
            counterCounter++;
        }
    })

    return counterCounter;
}

console.log(stantonMeasure([-6, 1, -4, 1, 6, 1, -9, 1, -6, 1, 9, 1, -5, 1, -8, 1, -1, 1]));