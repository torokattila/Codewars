function smaller(nums) {
    let resultArray = [];

    for (let i = 0; i < nums.length; i++) {
        let currentIndex = i;
        let counter = 0;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[currentIndex]) {
                counter++;
            }
        }

        resultArray.push(counter);
    }

    return resultArray;
}

console.log(smaller([1, 2, 0]));