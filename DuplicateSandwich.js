function duplicateSandwich(a) {
    let occurrences = {};

    if (Array.isArray(a)) {
        let duplicates = [];
        
        for (let i = 0; i < a.length; i++) {
            let item = a[i];
            occurrences[item] = occurrences[item] >= 1 ? occurrences[item] + 1 : 1;

            if (occurrences[item] >= 2) {
                duplicates.push(item);
            }
        }

        let duplicateValue = duplicates[0];

        let firstIndexOfDuplicate = a.indexOf(duplicateValue);;
        let lastIndexOfDuplicate = a.lastIndexOf(duplicateValue);

        if (firstIndexOfDuplicate == -1 || a.length == 2) {
            return [];
        } else {
            let resultArray = [];

            for (let i = firstIndexOfDuplicate + 1; i <= a.length; i++) {
                if (i < lastIndexOfDuplicate) {
                    resultArray.push(a[i]);
                }
            }

            return resultArray;
        }
    } else if (typeof a == 'string') {
        let aChars = a.split('');
        let duplicates = [];
        let resultString = '';

        for (let i = 0; i < aChars.length; i++) {
            let item = aChars[i];
            occurrences[item] = occurrences[item] >= 1 ? occurrences[item] + 1 : 1;

            if (occurrences[item] >= 2) {
                duplicates.push(item);
            }
        }

        let duplicateValue = duplicates[0];

        let firstIndexOfDuplicate = aChars.indexOf(duplicateValue);
        let lastIndexOfDuplicate = aChars.lastIndexOf(duplicateValue);

        for (let i = firstIndexOfDuplicate + 1; i < aChars.length; i++) {
            if (i < lastIndexOfDuplicate) {
                resultString += aChars[i];
            }
        }

        return resultString;
    }

}

console.log(duplicateSandwich('example'));