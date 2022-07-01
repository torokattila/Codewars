/*You will be given an array that contains two strings. Your job is to create a function that will take 
those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be*/

function transposeTwoStrings(array) {
    const firstItemChars = [...array[0]];
    const secondItemChars = [...array[1]];
    let differences = 0;
    const newArray = [];

    if (firstItemChars.length < secondItemChars.length) {
        differences = secondItemChars.length - firstItemChars.length;

        for (let i = 0; i < differences; i++) {
            firstItemChars.push(' ');
        }
    } else if (secondItemChars.length < firstItemChars.length) {
        differences = firstItemChars.length - secondItemChars.length;

        for (let i = 0; i < differences; i++) {
            secondItemChars.push(' ');
        }
    }

    for (let i = 0; i < firstItemChars.length; i++) {
        newArray.push(`${firstItemChars[i]} ${secondItemChars[i]}`);
    }

    return newArray.join('\n');
}

console.log(transposeTwoStrings(['cat', '']));
console.log(transposeTwoStrings(['xfhetc', 'nvfgk']));
console.log(transposeTwoStrings(['joey', 'louise']));
