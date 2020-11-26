/*You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, 
otherwise false.*/

function oddBall(arr) {
    let numbersArray = [];
    let indexOfOdd = arr.indexOf('odd');
    let result = false;

    arr.forEach(item => {
        if (typeof item == 'number') {
            numbersArray.push(item);
        }
    });

    numbersArray.forEach(number => {
        if (number == indexOfOdd) {
            result = true;
        }
    });

    return result;
}

console.log(oddBall(["even", 4, "even", 7, "even", 55, "even", 6, "even", 10, "odd", 3, "even"]));