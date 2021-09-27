/*Tranform of input array of zeros and ones to array in which counts number of continuous ones. 
If there is none, return an empty array

Example
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []*/

function onesCounter(input) {
	const onesArray = [];
    let oneCounter = 0;

    for (let i = 0; i < input.length; i++) {
        const current = input[i];

        if (current === 1) {
            oneCounter++;
        }

        if (i === input.length - 1 || current !== 1) {
            if (oneCounter !== 0) {
                onesArray.push(oneCounter);
            }

            oneCounter = 0;
        }
    }

	return onesArray;
}

console.log(onesCounter([1, 1, 1, 0, 1]));
console.log(onesCounter([1, 1, 1, 1, 1]));
console.log(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1]));
