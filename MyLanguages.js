function myLanguages(results) {
    let sortedResultsObject = [];
    let finalArray = [];
    let entries = Object.entries(results);
    let sortedEntries = entries.sort((a, b) => {
        return b[1] - a[1];
    })

    sortedEntries.forEach((item) => {
        sortedResultsObject.push({
            [item[0]] : item[1]
        });
    })

    for (let i = 0; i < sortedResultsObject.length; i++) {
        for (const [key, value] of Object.entries(sortedResultsObject[i])) {
            if (value >= 60) {
                finalArray.push(key);
            }
        }
    }
    
    return finalArray;
}