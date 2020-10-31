/*Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), 
check if the array contains three and two of the same values.*/

function checkThreeAndTwo(array) {
    let occurrences = {};
    let valuesArray = [];

    array.forEach(item => {
        return occurrences[item] ? occurrences[item]++ : occurrences[item] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        valuesArray.push(value);
    }

    return (valuesArray[0] == 3 && valuesArray[1] == 2) || (valuesArray[0] == 2 && valuesArray[1] == 3);
}

console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));