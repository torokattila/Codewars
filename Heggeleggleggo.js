/*Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. 
Argument will consist of a string with only alphabetic characters and possibly some spaces.*/

function heggeleggleggo(word) {
    const consonantPattern = /[qQwWrRtTzZpPsSdDfFgGhHjJkKlLyYxXcCvVbBnNmM]/;

    return word.split('').map(character => {
        if (consonantPattern.test(character)) {
            character = `${character}egg`;
        }

        return character;
    }).join('');
}

console.log(heggeleggleggo('code here'));