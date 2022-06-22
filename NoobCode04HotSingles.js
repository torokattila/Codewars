/*Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, 
in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]*/

function hotSingles(arr1, arr2) {
    const resultSet = new Set();
    const mergedArray = [...arr1, ...arr2];

    mergedArray.forEach((item) => {
        if (arr1.includes(item) && !arr2.includes(item)) {
            resultSet.add(item);
        } else if (!arr1.includes(item) && arr2.includes(item)) {
            resultSet.add(item);
        }
    });

    return [...resultSet];
}

console.log(hotSingles([100, 45, 'ciao'], [100, 2, 3, 45, 5]));
