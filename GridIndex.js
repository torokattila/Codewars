/*You are given an n by n ( square ) grid of characters, for example:

[['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']]
You are also given a list of integers as input, for example:

[1, 3, 5, 8]
You have to find the characters in these indexes of the grid if you think of the indexes as:

[[1, 2, 3], 
 [4, 5, 6], 
 [7, 8, 9]]
Remember that the indexes start from one and not zero.

Then you output a string like this:

"meal"*/

function gridIndex(grid, indices) {
    let counter = 0;
    const object = {};

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            counter++;
            object[counter] = grid[i][j];
        }
    }

    return indices.map(index => object[`${index}`]).join("");
}

const grid = [["m", "y", "e"], ["x", "a", "m"], ["p", "l", "e"]];
const indices = [1, 3, 5, 8];

console.log(gridIndex(grid, indices));
