//Write a function that returns the number of occurrences of an element in an array.

Array.prototype.numberOfOccurrences = function (param) {
    const array = this;
    let occurrences = {};
    let result = 0;

    array.forEach(item => {
        return occurrences[item] ? occurrences[item]++ : occurrences[item] = 1;
    })

    for (const [key, value] of Object.entries(occurrences)) {
        if (typeof param == 'number') {
            if (parseInt(key) == param) {
                result = value
            }
        } else if (typeof param == 'string') {
            if (key == param) {
                result = value;
            }
        }
    }

    return result;
}

console.log([ 4, 0, 4 ].numberOfOccurrences(4))