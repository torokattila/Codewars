/*For this task you will be given an array of numbers, each number in turn has to be cubed and once all 
numbers have been cubed all of them have to be added to get a final sum.

If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise 
return "You've pushed me to the max!".

You can assume that you will receive a valid array of numbers.*/

function maxedOut(arr) {
    const sum = arr.map(number => {
        number = Math.pow(number, 3);
        return number;
    }).reduce((accum, current) => accum + current);

    return sum <= Number.MAX_SAFE_INTEGER ? sum : `You've pushed me to the max!`;
}

console.log(maxedOut([-530,230,5600,40,5,7200]));