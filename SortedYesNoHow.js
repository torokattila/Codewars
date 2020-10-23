/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise*/

function isSortedAndHow(array) {
    let resultString = 'no';
    const copiedArrayForAsc = [...array];
    const copiedArraForDesc = [...array];
    let sortedArrayAsc = copiedArrayForAsc.sort(function (a,b) {
        return a - b;
    })
    let sortedArrayDesc = copiedArraForDesc.sort((a, b) => b - a);
    
    if (array.toString() == sortedArrayAsc.toString()) {
        resultString = 'yes, ascending';
    } else if (array.toString() == sortedArrayDesc.toString()) {
        resultString = 'yes, descending';
    }

    return resultString;
}

console.log(isSortedAndHow([15, 7, 3, -8]))