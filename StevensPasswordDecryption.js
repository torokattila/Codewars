/*Steven has attempted to secure his passwords by encrypting them using the following code:

function encryptPassword(p) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var cryptStr = "";
  
  for(i = 0; i < p.length; i++) {
    cryptStr += (alphabet.indexOf(p.split('')[i])).toString();
    cryptStr += "-";
  }
  var alphabetical = p.split('').sort();
  for(i = 0; i < alphabetical.length; i++) {
    cryptStr += alphabetical[i];
  }
  return cryptStr;
}
However, after encrypting all his passwords using this method he has forgotten what they were originally, 
and he can't seem to find a way to decrypt them.

Luckily he never used any numbers or special characters in his passwords, so the task is a bit easier. 
He needs you to write a function, decryptPassword which takes the encrypted password (p) and 
returns the original password as a string.

For example:

decryptPassword("1-0-2-14-13-abcno") -> bacon
decryptPassword("44-19-4-21-4-13-Seentv") -> Steven*/

function decryptPassword(p) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return p
        .split('-')
        .filter((char) => !isNaN(Number(char)))
        .map((num) => alphabet.charAt(Number(num)))
        .join('');
}

console.log(decryptPassword('1-0-2-14-13-abcno'));
