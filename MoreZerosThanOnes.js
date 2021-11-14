/*Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) 
containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order 
in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.*/

function moreZeros(s) {
	const stringWithRemovedDuplicates = [...new Set(s.split(''))];
	const binaries = stringWithRemovedDuplicates.map(char =>
		char.charCodeAt().toString(2).replace(/^0+/, '')
	);
    const resultArray = [];

	const isValidArray = binaries.map(binary => {
		let onesCounter = 0;
		let zerosCounter = 0;
		let isValid = false;

		binary.split('').forEach(bit => {
			if (bit === '0') {
				zerosCounter++;
			} else if (bit === '1') {
				onesCounter++;
			}
		});

		if (zerosCounter > onesCounter) {
			isValid = true;
		}

		onesCounter = 0;
		zerosCounter = 0;

		return isValid;
	});

    isValidArray.forEach((item, index) => {
        if (item) {
            resultArray.push(stringWithRemovedDuplicates[index]);
        }
    });

	return resultArray;
}

console.log(moreZeros('abcdeabcde'));
