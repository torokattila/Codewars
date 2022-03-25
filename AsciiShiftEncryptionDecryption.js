/*The goal of this kata is to create a very simple ASCII encryption and decryption. 
The encryption algorithm should shift each character's charcode by the character's current index in the string (0-based).

Example:
  p | a | s | s | w | o | r | d # Plaintext
+ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (add)
  p | b | u | v | [ | t | x | k # Ciphertext
The decryption should reverse this:

  p | b | u | v | [ | t | x | k # Ciphertext
- 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (subtract)
  p | a | s | s | w | o | r | d # Plaintext*/

function asciiEncrypt(plaintext) {
    return plaintext
        .split('')
        .map((char, index) => String.fromCharCode(char.charCodeAt() + index))
        .join('');
}

function asciiDecrypt(ciphertext) {
    return ciphertext
        .split('')
        .map((char, index) => String.fromCharCode(char.charCodeAt() - index))
        .join('');
}

console.log(asciiEncrypt('PASSWORD'));
console.log(asciiDecrypt('PBUV[TXK'));
