/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

var uniqueInOrder = function(iterable) {
    if (iterable === "" || iterable.length === 0) return [];

    const resultArray = [];

	if (typeof iterable === "string") {
        const charactersArray = iterable.split('');

        for (let i = 0; i < charactersArray.length; i++) {
            if (charactersArray[i] !== charactersArray[i - 1]) {
                resultArray.push(charactersArray[i])
            }
        }
    } else {
        for (let i = 0; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i - 1]) {
                resultArray.push(iterable[i]);
            }
        }
    }

    return resultArray;
};

console.log(uniqueInOrder([1,2,2,3,3]));