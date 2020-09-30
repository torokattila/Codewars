function thatUnitesUs(array1, array2, n) {
    let mergedArray = [...array1, ...array2];
    let uniqueMergedArraySet = new Set();

    mergedArray.forEach(item => { uniqueMergedArraySet.add(item); });

    return Array.from(uniqueMergedArraySet).sort().join('').substring(0, n).split('');
}

console.log(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 3));