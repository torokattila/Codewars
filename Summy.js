/*Write a function that takes a string which has integers inside it separated by spaces, and your task is 
to convert each integer in the string into an integer and return their sum.*/

function summy(stringOfInts) {
    return parseInt(stringOfInts.split(' ').reduce((accum, current) => {
        return parseInt(accum) + parseInt(current);
    }));
}

console.log(summy("1 2 3"));