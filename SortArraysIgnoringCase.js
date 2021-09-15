/*Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]*/

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function(names) {
    return names.sort((a, b) => {
        let namesA = a.toLowerCase();
        let namesB = b.toLowerCase();

        if (namesA < namesB) {
            return -1;
        }

        if (namesA > namesB) {
            return 1;
        }

        return 0;
    });
};

console.log(sortme(["Hello", "there", "I'm", "fine"]));
