/*You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers 
from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers 
in the array.*/

function rangeBitCount(a, b) {
    let binariesArray = [];
    let onesCounter = 0;

    for (let i = a; i <= b; i++) {
        binariesArray.push(i.toString(2));
    }

    binariesArray.forEach(element => {
        element.split('').forEach(character => {
            if (character == '1') {
                onesCounter++;
            }
        });
    });

    return onesCounter;
}

console.log(rangeBitCount(2, 7));