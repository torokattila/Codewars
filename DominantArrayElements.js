/*An element in an array is dominant if it is greater than all elements to its right. You will be 
given an array and your task will be to return a list of all dominant elements.*/

function solve(arr) {
    return arr.filter((value, index, array) => {
        return [...array].splice(index + 1, array.length).every(other => value > other);
    })
};

console.log(solve([5,4,3,2,1]));