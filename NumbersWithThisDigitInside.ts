/*You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0].*/

export function numbersWithDigitInside(x: number, d: number): number[] {
	let counter: number = 0;
    let sum: number = 0;
    let product: number = 1;

    for (let i = 1; i <= x; i++) {
        if (`${i}`.includes(`${d}`)) {
            counter++;
            sum += i;
            product *= i;
        }
    }

    return counter === 0 ? [0, 0, 0] : [counter, sum, product];
}

console.log(numbersWithDigitInside(11, 1));
