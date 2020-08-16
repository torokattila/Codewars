function solve(str) {
    let stringWithoutSpace = str.split(' ').join('');
    let newString = "";
    let index = 0;
    let spacesArray = [];

    while((index = str.indexOf(' ', index + 1)) > 0) {
        spacesArray.push(index);
    }

    newString = stringWithoutSpace.split('').reverse().join('');

    for (let i = 0; i < spacesArray.length; i++) {
        newString = newString.slice(0, spacesArray[i]) + ' ' + newString.slice(spacesArray[i], newString.length);
    }

    return newString;
}