/*If you're not familiar with the fantastic culinary delights of the British Isles you may not know about the bread sandwich.

The idea is very simple - if you have a slice of bread between two other slices of bread, then it's a bread sandwich. 
Additionally, if you have a bread sandwich between two other slices of bread, you get a bread sandwich sandwich, and so on.

In this kata, we will define the following terms like so:

Sandwich - Two slices of bread which may or may not have a filling
Bread Sandwich - Two slices of bread which contains one slice of bread in the middle as a filling
You will need to build two functions:

Given the number of slices of bread, return the phrase used to refer to the sandwich
 2 - 'sandwich'
 5 - 'bread sandwich sandwich'
The reverse function - given the name of the sandwich, return how many slices of bread there are in the sandwich
'bread sandwich' - 3
'sandwich sandwich' - 4
You should return None/null if there is no input / the input is invalid / there is no sandwich
Maximum 100 slices of bread*/

function slicesToName(n) {
    if (typeof n !== 'number' || n <= 1) return null;
    const breadCount = n % 2;
    const sandwichesCount = Math.floor(n / 2);
    const sandwiches = new Array(sandwichesCount).fill('sandwich');

    return breadCount >= 1
        ? `${'bread'.repeat(breadCount)} ${sandwiches.join(' ')}`
        : `${sandwiches.join(' ')}`;
}

function nameToSlices(name) {
    if (typeof name !== 'string' || name === '' || !name.includes('sandwich'))
        return null;
    const words = name.split(' ');
    const breadCount = words.filter((word) => word === 'bread').length;

    if (breadCount > 1) return null;
    if (words.includes('bread') && words[0] !== 'bread') return null;

    const sandwichesCount =
        words.filter((word) => word === 'sandwich').length * 2;

    return breadCount + sandwichesCount;
}

console.log(slicesToName(3));
console.log(nameToSlices('sandwich sandwich sandwich sandwich'));
