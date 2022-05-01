/*Sort array by last character

Complete the function to sort a given array or list by last character of elements.

Element can be an integer or a string.

Example:
['acvd', 'bcc']  -->  ['bcc', 'acvd']
The last characters of the strings are d and c. As c comes before d, sorting by last character will give ['bcc', 'acvd'].

If two elements don't differ in the last character, then they should be sorted by the order they come in the array.*/

function sortMe(arr) {
    const collection = [];

    arr.forEach((item, index) => {
        collection.push({
            item,
            index,
            lastChar: `${item}`.slice(-1),
        });
    });

    return collection
        .sort((a, b) => {
            if (a.lastChar === b.lastChar) {
                if (a.index < b.index) return -1;
                if (a.index > b.index) return 1;
                return 0;
            } else {
                if (a.lastChar < b.lastChar) return -1;
                if (a.lastChar > b.lastChar) return 1;
                return 1;
            }
        })
        .map((item) => item.item);
}

console.log(sortMe(['asdf', 'asdf', '14', '13']));
