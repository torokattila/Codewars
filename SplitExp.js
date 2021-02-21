/*You are given a decimal number n as a string. Transform it into an array of numbers (given as strings again), 
such that each number has only one nonzero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros.

Input/Output
[input] string n

A non-negative number.

1 ≤ n.length ≤ 30.

[output] a string array

Elements in the array should be sorted in descending order.

Example
For n = "7970521.5544" the output should be:

["7000000", 
"900000", 
"70000", 
"500", 
"20", 
"1", 
".5",
".05",
".004",
".0004"]
For n = "7496314", the output should be:

["7000000", 
"400000", 
"90000", 
"6000", 
"300", 
"10", 
"4"]
For n = "0", the output should be []*/

function splitExp(n) {
    if (n == '0') {
        return [];
    } else {
        if (n.includes('.')) {
            n = n.split('.');
            let beforeDotsCharsReverse = n[0].split('').reverse();
            let afterDotsChars = n[1].split('');
            let beforeDotsReverseArray = [];
            let afterDotsArray = [];

            for (let i = 0; i < beforeDotsCharsReverse.length; i++) {
                if (beforeDotsCharsReverse[i] == '0') {
                    continue;
                }

                beforeDotsReverseArray.push(beforeDotsCharsReverse[i] + '0'.repeat(i));
            }

            for (let i = 0; i < afterDotsChars.length; i++) {
                if (afterDotsChars[i] == '0') {
                    continue;
                }
                afterDotsArray.push('.' + '0'.repeat(i) + afterDotsChars[i]);
            }

            beforeDotsReverseArray = beforeDotsReverseArray.reverse();

            return beforeDotsReverseArray.concat(afterDotsArray);
            
        } else {
            n = n.split('.');
            let beforeDotsCharsReverse = n[0].split('').reverse();
            let beforeDotsReverseArray = [];

            for (let i = 0; i < beforeDotsCharsReverse.length; i++) {
                if (beforeDotsCharsReverse[i] == '0') {
                    continue;
                }

                beforeDotsReverseArray.push(beforeDotsCharsReverse[i] + '0'.repeat(i));
            }

            return beforeDotsReverseArray.reverse();
        }
    }
}

console.log(splitExp("1.000009"));