/*Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). 
If not, simply return "Not a perfect square!".

Examples:

1212 returns:

12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

123
123
123

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.*/

const isPerfectSquare = (number) => {
    return number > 0 && Math.sqrt(number) % 1 === 0;
};

const squareIt = (int) => {
    if (!isPerfectSquare(`${int}`.length)) return 'Not a perfect square!';
    let result = '';
    const lengthRoot = Math.sqrt(`${int}`.length);
    const intString = `${int}`;
    let incrementedRoot = lengthRoot;

    for (let i = 0; i < intString.length; i += lengthRoot) {
        const concatString = intString.slice(i, incrementedRoot);
        incrementedRoot += lengthRoot;

        if (i != intString.length - lengthRoot) {
            result += concatString + '\n';
        } else {
            result += concatString;
        }
    }

    return result;
};

console.log(squareIt(222));
console.log(squareIt(1212));
console.log(squareIt(112141568));
