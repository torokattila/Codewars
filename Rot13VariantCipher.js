/*You have been recruited by an unknown organization for your cipher encrypting/decrypting skills.
Being new to the organization they decide to test your skills.
Your first test is to write an algorithm that encrypts the given string in the following steps.

The first step of the encryption is a standard ROT13 cipher. 
This is a special case of the caesar cipher where the letter is 
encrypted with its key that is thirteen letters down the alphabet,
i.e. A => N, B => O, C => P, etc..

Part two of the encryption is to take the ROT13 output and replace each letter with its exact opposite. A => Z, B => Y, C => X.
The return value of this should be the encrypted message.

Do not worry about capitalization or punctuation. All encrypted messages should be lower case and punctuation free.
As an example, the string "welcome to our organization" should return "qibkyai ty ysv yvgmzenmteyz".

*/

function rot13(message) {
    const alphabet =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const rotated =
        'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
    const pairs = {};
    const letterPattern = /[a-zA-Z]/;

    alphabet.forEach((char, index) => {
        pairs[char] = rotated[index];
    });

    return message
        .split('')
        .map((char) => {
            if (letterPattern.test(char)) {
                char = pairs[char];
            }

            return char;
        })
        .join('');
}

function encrypter(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcba'.split('');
    const opposites = {};
    const rot13Result = rot13(string).toLowerCase();
    const letterPattern = /[a-zA-Z]/;

    alphabet.forEach((letter, index) => {
        opposites[letter] = reversedAlphabet[index];
    });

    return rot13Result
        .split('')
        .map((char) => {
            if (letterPattern.test(char)) {
                char = opposites[char];
            }

            return char;
        })
        .join('');
}

console.log(encrypter('welcome to our organization'));
