/*For an integer k rearrange all the elements of the given array in such way, that:

all elements that are less than k are placed before elements that are not less than k;
all elements that are less than k remain in the same order with respect to each other;
all elements that are not less than k remain in the same order with respect to each other.*/

function splitByValue(k, elements) {
    let beforeK = [];
    let afterK = [];

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] < k) {
            beforeK.push(elements[i]);
        } else {
            afterK.push(elements[i]);
        }
    }

    return [...beforeK, ...afterK];
}

console.log(splitByValue(5,[1, 3, 5, 7, 6, 4, 2]))