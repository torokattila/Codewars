/*Find the difference between two collections. The difference means that either the character is present 
in one collection or it is present in other, but not in both. Return a sorted set with difference.

The collections can contain any character and can contain duplicates.*/

function diff(a, b) {
    const differences = a.filter(item => !b.includes(item)).concat(b.filter(item => !a.includes(item))).sort((a, b) => a - b).sort();
    let differencesSet = new Set([...differences]);

    return Array.from(differencesSet);
}

console.log(diff(['a', 'b', 'z', 'd', 'e', 'd'], ['a', 'b', 'j', 'j']));