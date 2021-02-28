/*Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 
For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the 
integers is 3635.*/

function sumOfIntegersInString(s) {
    s = s.replace(/[^0-9]/g, ' ');

    let numbersArray = s.split(' ').map(item => {
        if (!isNaN(parseInt(item))) {
            return parseInt(item);
        }
    }).filter(item => item != undefined);

    return numbersArray.length == 0 ? 0 : numbersArray.reduce((accum, current) => accum + current);
}

console.log(sumOfIntegersInString("Dogs are our best friends."));