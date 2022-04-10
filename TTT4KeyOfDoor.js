/*You are in a maze. There are a lot of doors, you have to find the passcode to open them. 
There are some numbers next to each door, and you need to find the passcode from these numbers.

You will coding in function findKey. parameter: int array nums, contains some numbers like this:

[153456,123406,124456,323456,123458,123756]
How to find the passcode? Let's change the arrangement method:

[
153456,
123406,
124456,
323456,
123458,
123756
]
We can see that each column has one number different from the others, they are the passcode.

Please find out the passcode and return it(a string value).

Examples
findKey([153456,123406,124456,323456,123458,123756])
should return "354708"

findKey([7347289,3647289,3357289,3344289,3347389,3347229,3347281])
should return "7654321"

findKey([232326,232363,232523,235323,242323,432323])
should return "445566"

findKey([13579,13579,13579,13579,24680])
should return "24680"*/

function findKey(nums) {
    const matrix = nums.map((num) => `${num}`.split(''));
    let columns = [];

    for (let i = 0; i < matrix.length; i++) {
        const innerArray = [];

        for (let j = 0; j < matrix.length; j++) {
            innerArray.push(matrix[j][i]);
        }

        columns.push(innerArray);
    }

    return columns
        .map((innerArray) => {
            return innerArray
                .map((item) => Number(item))
                .sort((a, b) => Number(b) - Number(a));
        })
        .map((innerArray) => {
            return innerArray.filter(
                (innerItem) =>
                    innerArray.indexOf(innerItem) ===
                    innerArray.lastIndexOf(innerItem)
            );
        })
        .join('');
}

console.log(
    findKey([7347289, 3647289, 3357289, 3344289, 3347389, 3347229, 3347281])
);
