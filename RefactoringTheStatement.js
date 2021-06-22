/*We want to convert numbers in a given string to specific characters according to ASCII code with some manipulation on it. 
This statement 'str8ng is he17e' should converted to 'string is here', its just converting these numbers to ASCII code then to a char according to it.

So you should understand how ASCII code of chars are sorted, and if its begin with 'a' as 0, next one is 'b' which is 1 in someway.

each word contains just one character to convert the number to it.

Example: if given string is '0pple' that will return 'apple'.*/

function generateAbcArray() {
    let i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);
    let abcArray = [];

    for (; i <= j; ++i) {
        abcArray.push(String.fromCharCode(i));
    }

    return abcArray;
}

function refactoryString(str) {
    const abcArray = generateAbcArray();
    const numberLetterPairs = {};
    const numbersFromString = str.match(/\d+/g);

    abcArray.forEach((item, index) => {
        numberLetterPairs[index] = item;
    });

    if (numbersFromString) {
        numbersFromString.forEach(number => {
            str = str.replace(number, numberLetterPairs[number]);
        });
    
        return str;
    } else {
        return str;
    }
}

console.log(refactoryString('0pple'));
