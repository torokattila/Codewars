/*I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham*/

function mutateMyStrings(stringOne, stringTwo) {
    let modifiedStringOne = stringOne.split('');
    const result = [`${stringOne}\n`];
    let i = 0;
    let charCounter = 0;

    while (modifiedStringOne.join('') !== stringTwo) {
        if (i === stringOne.length) {
            i = 0;
            charCounter++;
        }

        modifiedStringOne[charCounter] = stringTwo.charAt(charCounter);
        result.push(`${modifiedStringOne.join('')}\n`);

        i++;
    }

    return [...new Set(result)].join('');
}

const stringOne = 'bubble gum';
const stringTwo = 'turtle ham';

console.log(mutateMyStrings(stringOne, stringTwo));
