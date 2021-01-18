/*Given two arrays of strings, return the number of times each string of the second array appears in the 
first array.*/

function solve(a, b) {
    let resultArray = [];

    for (let i = 0; i < b.length; i++) {
        let match = 0;
        for (let j = 0; j < a.length; j++) {
            if (b[i] == a[j]) {
                match++;
            }
        }

        resultArray.push(match);
    }

    return resultArray;
}

console.log(solve(['abc', 'abc', 'xyz', 'cde', 'uvw'], ['abc', 'cde', 'uap']));