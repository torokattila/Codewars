/*You are given a list of numbers. The numbers each repeat a certain number of times. Remove all 
numbers that repeat an odd number of times while keeping everything else the same.*/

function oddOnesOut(nums) {
    let occurrences = {};
    let newArray = [];

    nums.forEach(item => {
        return occurrences[item] ? occurrences[item]++ : occurrences[item] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        if (value % 2 !== 0) {
            newArray.push(parseInt(key));
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        nums = nums.filter(item => item != newArray[i]);
    }

    return nums;
}

console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]));