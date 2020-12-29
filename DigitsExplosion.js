/*Given a string made of digits [0-9], return a string where each digit is repeated a number of times 
equals to its value.

Examples
Digits.Explode("312") = "333122"
Digits.Explode("102269") = "12222666666999999999"*/

function explode(s) {
    let splittedStringMultiArray = [];
    let resultArray = [];
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
        splittedStringMultiArray.push(Array(parseInt(s[i])).fill(s[i]));
    }

    for (let i = 0; i < splittedStringMultiArray.length; i++) {
        for (let j = 0; j < splittedStringMultiArray[i].length; j++) {
            resultArray.push(splittedStringMultiArray[i][j]);
        }
    }

    return resultArray.join('');
}

console.log(explode("312"));