/*You'll be passed an array of objects (list) - you must sort them in descending order based on the value of 
the specified property (sortBy).

Example
When sorted by "a", this:

[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
The values will always be numbers, and the properties will always exist.*/

function sortList(sortBy, list) {
    if (list.length == 0) {
        return [];
    } else {
        return list.sort((a, b) => {
            let aProp = a[sortBy];
            let bProp = b[sortBy];

            if (aProp < bProp) return 1;
            if (aProp > bProp) return -1;
            return 0;
        });
    }
}

console.log(sortList('b', [{ a: 2, b: 2 }, { a: 3, b: 40 }, { a: 1, b: 12 }]));