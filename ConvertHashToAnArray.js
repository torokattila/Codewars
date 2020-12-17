/*Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.*/

function convertHashToArray(hash) {
    let resultArray = [];
    sortedHash = Object.keys(hash)
        .sort()
        .reduce((accum, key) => {
            accum[key] = hash[key];
            return accum;
        }, {});

    for (const [key, value] of Object.entries(sortedHash)) {
        resultArray.push([key, value]);
    }

    return resultArray;
}

console.log(convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));