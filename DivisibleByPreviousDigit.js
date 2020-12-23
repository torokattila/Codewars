/*Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.*/

function divisibleByLast(n) {
    let resultArray = [];
    n = n.toString().split('');

    for (let i = 0; i < n.length; i++) {
        if (parseInt(n[i]) % parseInt(n[i - 1]) == 0) {
            resultArray.push(true);
        } else {
            resultArray.push(false);
        }
    }

    return resultArray;
}

console.log(divisibleByLast(2026));