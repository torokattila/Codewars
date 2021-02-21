/*You read the title.

You must guess a sequence.

It will have something to do with the number given.

Example:

  x = 16

  result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
be ready for large x*/

function sequence(x) {
    let resultArray = [];
    let oneDigitArray = [];
    let twoDigitArray = [];

    if (x >= 10) {
        for (let i = 1; i <= x; i++) {
            if (i.toString().length == 1) {
                oneDigitArray.push(i);
            } else if (i.toString().length > 1) {
                twoDigitArray.push(i);
            }
        }

        for (let i = 0; i < oneDigitArray.length; i++) {
            resultArray.push(oneDigitArray[i]);
            for (let j = 0; j < twoDigitArray.length; j++) {
                if (twoDigitArray[j].toString().startsWith(oneDigitArray[i].toString())) {
                    resultArray.push(twoDigitArray[j]);
                }
            }
        }

        return resultArray;
    } else {
        for (let i = 1; i <= x; i++) {
            resultArray.push(i);
        }
    }

    return resultArray;
}

console.log(sequence(85));