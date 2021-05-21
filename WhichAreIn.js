/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which 
are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.*/

function inArray(array1, array2) {
	const substringsSet = new Set();

    array1.forEach(array1Item => {
        array2.forEach(array2Item => {
            if (array2Item.includes(array1Item)) {
                substringsSet.add(array1Item);
            }
        });
    });

    let substringsArray = [...substringsSet];

    return substringsArray.sort((a, b) => {
        if (a > b) {
            return 1;
        }

        if (b > a) {
            return -1;
        }

        return 0;
    });
}

console.log(inArray([ 'live', 'strong', 'arp' ], [ 'lively', 'alive', 'harp', 'sharp', 'armstrong' ]));