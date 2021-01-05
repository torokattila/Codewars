/*Create a function called noRepeat() that takes a string argument and returns a single letter string of 
the first not repeated character in the entire string.*/

function noRepeat(str) {

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
}

console.log(noRepeat('wxyz'));