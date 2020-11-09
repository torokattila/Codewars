/*Your task is to make a function that can take any non-negative integer as an argument and return 
it with its digits in descending order. Essentially, rearrange the digits to create the highest 
possible number.*/

function descendingOrder(n) {
    return parseInt(n.toString().split('').map(number => {
        return parseInt(number);
    }).sort((a, b) => 
        b - a
    ).join('')); 
}

console.log(descendingOrder(1201));