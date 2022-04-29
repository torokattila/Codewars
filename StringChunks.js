/*You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array. It is ok for the last element to have less than n characters.

If n is not a number or not a valid size (> 0) (or is absent), you should return an empty array.

If n is greater than the length of the string, you should return an array with the only element being the same string.

Examples:

stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
stringChunk('sunny day', 0) // []*/

function stringChunk(str, n) {
    if (n === 0 || n < 0 || !n || typeof n !== 'number') return [];
    const strChars = [...str];
    const chunks = [];

    for (let i = 0; i < strChars.length; i += n) {
        chunks.push(strChars.slice(i, i + n));
    }

    return chunks.map((innerArray) => innerArray.join(''));
}

console.log(stringChunk('hello world', 3));
