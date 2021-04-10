/*Complete function splitOddAndEven, accept a number n(n>0), return an array that contains the continuous 
parts of odd or even digits.

Please don't worry about digit 0, it won't appear ;-)

Examples
splitOddAndEven(123)  ===  [1,2,3]

splitOddAndEven(223)  ===  [22,3]

splitOddAndEven(111)  ===  [111]

splitOddAndEven(13579)  ===  [13579]

splitOddAndEven(135246)  ===  [135,246]

splitOddAndEven(123456)  ===  [1,2,3,4,5,6]*/

function splitOddAndEven(n) {
    let resultArray = [];
    let nChars = n.toString().split('');
    let evenNumbers = '';
    let oddNumbers = '';

    for (let i = 0; i < nChars.length; i++) {

        while (parseInt(nChars[i]) % 2 != 0 && i <= nChars.length) {
            oddNumbers += nChars[i];
        
            if (parseInt(nChars[i + 1]) % 2 == 0 || nChars[i + 1] == undefined) {
                resultArray.push(parseInt(oddNumbers));
                oddNumbers = '';                
                break;
            } else {
                break;
            }
        }

        while (parseInt(nChars[i]) % 2 == 0 && i <= nChars.length) {
            evenNumbers += nChars[i];

            if (parseInt(nChars[i + 1]) % 2 != 0 || nChars[i + 1] == undefined) {
                resultArray.push(parseInt(evenNumbers));
                evenNumbers = '';
                break;
            } else {
                break;
            }
        }

    }

    return resultArray;
}

const example = 75555838173596;
console.log(splitOddAndEven(example));