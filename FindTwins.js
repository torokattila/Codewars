/*Given an array of integers, your task is to find two same numbers and return one of them, for example in 
array [2, 3, 6, 34, 7, 8, 2] answer is 2.

If there are no twins in the city - return None or the equivalent in the language that you are using.*/

function elimination(arr) {
    let occurrences = {};
    let result = null;

    arr.forEach(number => occurrences[number] ? occurrences[number]++ : occurrences[number] = 1);

    for (const [key, value] of Object.entries(occurrences)) {
        if (value == 2) {
            result = parseInt(key);
        }
    }

    return result;
}

console.log(elimination([2,5,34,1,22]))