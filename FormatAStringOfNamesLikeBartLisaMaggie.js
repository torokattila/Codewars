/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, 
which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''*/

function list(names) {
    if (names.length === 0) return "";

    const namesArray = names.map(name => name.name);

    if (namesArray.length === 1) {
        return `${namesArray[0]}`;
    } else if (namesArray.length === 2) {
        return `${namesArray[0]} & ${namesArray[1]}`;
    } else {
        let resultString = "";

        for (let i = 0; i < namesArray.length - 2; i++) {
            resultString += `${namesArray[i]}, `;
        }

        return `${resultString}${namesArray[namesArray.length - 2]} & ${namesArray[namesArray.length - 1]}`;
    }
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
