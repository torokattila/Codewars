/*In your class, you have started lessons about arithmetic progression. Since you are also a programmer, 
you have decided to write a function that will return the first n elements of the sequence with the given 
common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"*/

function arithmeticSequenceElements(a, r, n) {
    let resultArray = [];

    if (r == 0) {
        for (let i = 0; i < n; i++) {
            resultArray.push(a);
        }
    } else if (r > 0) {

        let i = a;
        let tempCounter = 1;
        resultArray.push(a);

        while (tempCounter < n) {
            i += r;
            resultArray.push(i);
            tempCounter++;
        }

    } else if (r < 0) {
        const absoluteR = Math.abs(r);
        resultArray.push(a);

        let i = a;
        let tempCounter = 1;
        while (tempCounter < n) {
            i -= absoluteR;
            resultArray.push(i);
            tempCounter++;
        }
    }

    return resultArray.join(', ');
}

console.log(arithmeticSequenceElements(48, 0, 44));