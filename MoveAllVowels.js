/*Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.*/

function moveVowel(input) {
    const vowelPattern = /[aeiouAEIOU]/;
    let vowelsArray = [];
    let inputChars = input.split('').map(character => {
        if (vowelPattern.test(character)) {
            vowelsArray.push(character);
            character = '';
        }
        
        return character;
    });

    return inputChars.join('') + vowelsArray.join('');
}

console.log(moveVowel('peace'));