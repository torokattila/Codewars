/*Check that the two provided arrays both contain the same number of different unique items, regardless of order. 
For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.*/

function balance(arr1, arr2) {
    const firstArrOccurrences = {};
    const secondArrOccurrences = {};

    arr1.forEach((item) => {
        return firstArrOccurrences[item]
            ? firstArrOccurrences[item]++
            : (firstArrOccurrences[item] = 1);
    });

    arr2.forEach((item) => {
        return secondArrOccurrences[item]
            ? secondArrOccurrences[item]++
            : (secondArrOccurrences[item] = 1);
    });

    const sortedFirstArrValues = Object.values(firstArrOccurrences).sort(
        (a, b) => a - b
    );
    const sortedSecondArrValues = Object.values(secondArrOccurrences).sort(
        (a, b) => a - b
    );

    let result = true;
    if (sortedFirstArrValues.length !== sortedSecondArrValues.length)
        result = false;

    sortedFirstArrValues.forEach((value, index) => {
        if (sortedSecondArrValues[index] !== value) {
            result = false;
        }
    });

    return result;
}

const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'g'];
const array2 = ['h', 'h', 'i', 'j', 'k', 'l', 'm', 'm'];

console.log(balance(array1, array2));
