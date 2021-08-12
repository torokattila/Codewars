/*Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.

Example:

sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5); 2 is the only even number in the sequence and doesn't have another number 
in the sequence to get added to in the indexed Fibonacci sequence.
Example:

sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// 2 + 8 + 34 = 44;*/

function sumFibs(number) {
	const result = [0, 1];
    let sum = 0;

    for (let i = 2; i < number + 1; i++) {
        if ((result[i - 2] + result[i - 1]) % 2 === 0) {
            sum += (result[i - 2] + result[i - 1]);
        }
        
        result.push(result[i - 2] + result[i - 1]);
    }

    return sum;
}

console.log(sumFibs(9));
