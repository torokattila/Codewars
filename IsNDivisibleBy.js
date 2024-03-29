/*Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other 
arguments (return true if no other arguments)

Example:

isDivisible(6,1,3)--> true because 6 is divisible by 1 and 3
isDivisible(12,2)--> true because 12 is divisible by 2
isDivisible(100,5,4,10,25,20)--> true
isDivisible(12,7)--> false because 12 is not divisible by 7*/

function isDivisible() {
    const args = [...arguments];
    if (args.length === 0) return false;
    if (args.length === 1) return true;
    const firstArg = args[0];
    let result = true;

    args.slice(1).forEach((arg) => {
        if (firstArg % arg !== 0) {
            result = false;
        }
    });

    return result;
}

console.log(isDivisible(8, 3, 4, 2, 5));
