/*Create function diff getting 2 sets as arguments and returning a new Set as result of relative 
complement of second set in first.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

diff(A,B) // -> {1}
diff(B,A) // -> {3}*/

function diff(s1, s2) {
    const setOneArray = Array.from(s1);
    const setTwoArray = Array.from(s2);

    return new Set(setOneArray.filter(setItem => !setTwoArray.includes(setItem)));
}

const A = new Set([1, 2]);
const B = new Set([2, 3]);

console.log(diff(A, B));