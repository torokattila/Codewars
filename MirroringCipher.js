/*You are back at your newly acquired decrypting job for the secret organization when a new assignment comes in. 
Apparently the enemy has been communicating using a device they call "The Mirror".
It is a rudimentary device with encrypts the message by switching its letter with 
its mirror opposite (A => Z), (B => Y), (C => X) etc.

Your job is to build a method called "mirror" which will decrypt the messages. Resulting messages will be in lowercase.

To add more secrecy, you are to accept a second optional parameter, telling you which letters or characters are to be reversed; 
if it is not given, consider the whole alphabet as a default.

To make it a bit more clear: e.g. in case of "abcdefgh" as the second optional parameter, 
you replace "a" with "h", "b" with "g" etc. .

For example:

mirror("Welcome home"), "dvoxlnv slnv" //whole alphabet mirrored here
mirror("hello", "abcdefgh"), "adllo" //notice only "h" and "e" get reversed*/

function mirror(code) {
    const args = [...arguments];
    const firstParam = args[0];
    const secondParam = args[1] !== undefined ? args[1] : false;
    let alphabetCopy;
    let alphabet;
    let mirrored;
    const mirrorCollection = {};

    if (!secondParam && secondParam !== '') {
        alphabetCopy = 'abcdefghijklmnopqrstuvwxyz'.split('');
        alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        mirrored = 'zyxwvutsrqponmlkjihgfedcba'.split('');
    } else {
        alphabetCopy = [...secondParam.split('')];
        alphabet = [...secondParam.split('')];
        mirrored = alphabetCopy.reverse();
    }

    alphabet.forEach((letter, index) => {
        mirrorCollection[letter] = mirrored[index];
        mirrorCollection[mirrored[index]] = letter;
    });

    return firstParam
        .toLowerCase()
        .split('')
        .map((char) => {
            if (mirrorCollection[char]) {
                char = mirrorCollection[char];
            }

            return char;
        })
        .join('');
}

console.log(mirror('goodbye', ''));
