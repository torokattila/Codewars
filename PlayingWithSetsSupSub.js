/*Create 2 functions:

isSubsetOf getting 2 sets as arguments and returning true if 2d set contains all elements of 1st one.

isSupersetOf getting 2 sets as arguments and returning true if 1st set contains all elements of 2d one.

Examples:
A = new Set([1,2]);
B = new Set([1,2,3]);

isSubsetOf(A,B) // -> true
isSubsetOf(B,A) // -> false

isSupersetOf(A,B) // -> false
isSupersetOf(B,A) // -> true*/

function isSubsetOf(s1, s2) {
    const setOneArray = Array.from(s1);
    const setTwoArray = Array.from(s2);

    return setTwoArray.filter(setTwoItem => {
        return setOneArray.indexOf(setTwoItem) > -1;
    }).length == setOneArray.length;
}

function isSupersetOf(s1, s2) {
    const setOneArray = Array.from(s1);
    const setTwoArray = Array.from(s2);

    return setOneArray.filter(setOneItem => {
        return setTwoArray.indexOf(setOneItem) > -1;
    }).length == setTwoArray.length;
}

const A = new Set([1,2]);
const B = new Set([1, 2, 3]);

console.log(isSupersetOf(B, A));