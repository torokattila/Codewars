function getMissingElement(superImportantArray) {
    superImportantArray = superImportantArray.sort((a, b) => a - b);
    let array = [];

    for (let i = 0; i <= superImportantArray.length; i++) {
        if (i != superImportantArray[i]) {
            array.push(i)
        }
    }

    return array[0];
}

console.log(getMissingElement([9,2,4,5,7,0,8,6,1]));