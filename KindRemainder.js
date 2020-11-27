/*Write a function that will receive three arguments. The first two will always be arrays consisting of 
integers, the third one will be a string of letters. The lengths of the first two arrays will be equal, 
and the integers will always be positive.

You function should divide the first integer of the first array by the first one of the second array to 
find the remainder and then do the same with the second pair of integers, etc. If the biggest remainder of 
all found is an even number, the function should return the string in minuscule (small letters). 
Otherwise, the function should return the string in majuscule (capital letters).*/

function kira(a, b, c) {
    let remaindersArray = [];
    
    for (let i = 0; i < a.length; i++) {
        remaindersArray.push(a[i] % b[i]);
    }
    
    let max = Math.max.apply(null, remaindersArray);

    return max % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
}

console.log(kira([16, 16], [10, 5], 'Doctor'));