function mergeArrays(a, b) {
    return (a.length > b.length ? a : b).reduce((accumulator, current, index) => a[index] && b[index] ? [...accumulator, a[index], b[index]] : [...accumulator, current], []);
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));