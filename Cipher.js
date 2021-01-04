/*This cipher involves taking each character of a string and multiplying their char codes by 6.

For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

You must write two functions:
`encode` to encode a given string,
`decode` to decode a given string.*/

function encode(str) {
    str = str.split('');
    let resultString = '';
    
    for (let i = 0; i < str.length; i++) {
        resultString += String.fromCharCode(str[i].charCodeAt() * 6);
    }

    return resultString;
}

function decode(str) {
    str = str.split('');
    let resultString = '';

    for (let i = 0; i < str.length; i++) {
        resultString += String.fromCharCode(str[i].charCodeAt() / 6);
    }

    return resultString;
}

console.log(decode('ưɞʈʈʚÀȊʚʬʈɘÆ'))