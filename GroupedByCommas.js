/*Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation 
of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"*/

function groupByCommas(n) {
    const reversedNumberString = `${n}`.split('').reverse().join('');
    let reversedResult = '';

    for (let i = 0; i < reversedNumberString.length; i++) {
        let char = reversedNumberString[i];

        if ((i + 1) % 3 === 0) {
            char = `${char},`;
        }

        reversedResult += char;
    }

    const result = reversedResult.split('').reverse().join('');

    return result.charAt(0) === "," ? result.substring(1) : result;
}

console.log(groupByCommas(10000));