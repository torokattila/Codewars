/*The goal of this kata is to write a function that takes two inputs: a string and a character. 
The function will count the number of times that character appears in the string. 
The count is case insensitive.*/

function countChar(string, char) {
    
    return string.toLowerCase().split('').filter(character => {
        return character.toLowerCase() == char.toLowerCase();
    }).length;
}

console.log(countChar("Fancy fifth fly aloof","f"));