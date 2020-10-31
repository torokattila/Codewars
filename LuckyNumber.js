/*Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 
then the number is lucky.*/

function isLucky(n) {
    n = n.toString().split('');

    const sum = n.reduce((accum, current) => {
        return parseInt(accum) + parseInt(current);
    });

    return sum == 0 || sum % 9 == 0;
}

console.log(isLucky(1892376));