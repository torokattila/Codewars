/*The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent 
(increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will 
always be strings and will always not be empty.*/

function sentence(List) {
    let sortedList = List.sort((first, second) => {
        let a = parseInt(Object.keys(first));
        let b = parseInt(Object.keys(second));

        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    let valuesArray = [];

    sortedList.forEach(list => {
        valuesArray.push(Object.values(list));
    });

    return valuesArray.join(' ');
}

const List = [
    { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
    { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
]

console.log(sentence(List));