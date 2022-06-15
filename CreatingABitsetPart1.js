/*A byte is a sequence of 8 bits. One could imagine implementing a small set data structure using a single byte. 
The set would hold at most the elements 0 through 7. 
The value of each bit in the byte would indicate whether the index of that bit was included in the set.

Consider the following byte, where the index of each bit is marked below.

Byte: 0 1 1 0 0 1 0 1

Index: 0 1 2 3 4 5 6 7

This byte would represent the set {1, 2, 5, 7}. Similarly,

10101010 ==> {0, 2, 4, 6}

11100000 ==> {0, 1, 2}

Your task is to write a function byte_to_set which takes a single byte (an integer 0-255), and returns the corresponding set.

>> byte_to_set(0)
set()

>> byte_to_set(255)
{0,1,2,3,4,5,6,7}

>> byte_to_set(3)
{6,7}*/

function byteToSet(byte) {
    let binary = byte.toString(2);
    const result = new Set();

    if (binary.length < 8) {
        let lengthDiff = 8 - binary.length;

        binary = `${'0'.repeat(lengthDiff)}${binary}`;
    }

    [...binary].forEach((char, index) => {
        if (char === '1') {
            result.add(index);
        }
    });

    return result;
}

console.log(byteToSet(0));
console.log(byteToSet(3));
console.log(byteToSet(255));
