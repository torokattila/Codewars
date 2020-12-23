/*Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. 
For an empty array return 0*/

function mostFrequentItemCount(collection) {
    let occurrences = {};
    let occurrencesValuesArray = [];

    if (collection.length == 0) {
        return 0;
    } else {
        collection.forEach(collection => occurrences[collection] ? occurrences[collection]++ : occurrences[collection] = 1);

        for (const [key, value] of Object.entries(occurrences)) {
            occurrencesValuesArray.push(value);
        }
    
        occurrencesValuesArray = occurrencesValuesArray.sort((a, b) => b - a);
    
        return occurrencesValuesArray[0];
    }   
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));