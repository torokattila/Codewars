/*Create an algorithm to count the number of zeros that appear between 1 and N.*/

function countZeros(n) {
    let zeroCounter = 0;

    for (let i = 1; i <= n; i++) {
        let temp = i;
        temp.toString().split('').forEach(character => {
            if (character == '0') {
                zeroCounter++;
            }
        });
    }

    return zeroCounter;
}

console.log(countZeros(100));