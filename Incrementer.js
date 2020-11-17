/*Given an input of an array of digits num, return the array with each digit incremented by its 
position in the array. For example, the first digit will be incremented by 1, the second digit by 2 etc. 
Make sure to start counting your positions from 1 and not 0.
Your result can only contain single digit numbers, so if adding a digit with it's position gives you a 
multiple-digit number, only the last digit of the number should be returned*/

function incrementer(nums) {
    let tempArray = [];

    if (nums.length == 0) {
        return [];
    } else {
        for (let i = 0; i < nums.length; i++) {
            tempArray.push(nums[i] + (i + 1));
        }
    }

    return tempArray.map(number => {
        if (number.toString().length > 1) {
            number = parseInt(number.toString().slice(number.toString().length - 1));
        }

        return number;
    });
}

console.log(incrementer([4,6,9,1,3]));