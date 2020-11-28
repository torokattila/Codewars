/*Write a function that takes an array and counts the number of each unique element present.*/

function count(array) {
    let occurrences = {};

    array.forEach(element => occurrences[element] ? occurrences[element]++ : occurrences[element] = 1);

    return occurrences;
}

console.log(count(['a', 'a', 'b', 'b', 'b']));