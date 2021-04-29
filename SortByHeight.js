/*Some people are standing in a row in a park. There are trees between them which cannot be moved.

Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be

[-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output
[input] integer array a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person 
standing in the ith position.

Constraints:

5 ≤ a.length ≤ 30,

-1 ≤ a[i] ≤ 200.

[output] an integer array

Sorted array a with all the trees untouched.

*/

function sortByHeight(a) {
    let minusOnesWithIndices = {};
    let nonMinusOnes = [];

    a.forEach((item, index) => {
        if (item == -1) {
            minusOnesWithIndices[index] = item;
        } else {
            nonMinusOnes.push(item);
        }
    });

    nonMinusOnes.sort((a, b) => a - b);

    for (const [key, value] of Object.entries(minusOnesWithIndices)) {
        nonMinusOnes.splice(parseInt(key), 0, value);
    }

    return nonMinusOnes;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(sortByHeight(a));
