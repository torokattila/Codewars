/*As part of this Kata, you need to find the length of the sequence in an array, between the first and 
the second occurrence of a specified number.*/

var lengthOfSequence = function (arr, n) {
    let occurrencesArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            occurrencesArray.push(i);
        }
    }

    return occurrencesArray.length == 0 || occurrencesArray.length > 2 || arr.length == 1 ? 0 : (occurrencesArray[1] - occurrencesArray[0]) + 1;
};

console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5));