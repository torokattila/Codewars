/*ou will be given two inputs: a string of words and a letter. For each string, return the alphabetic 
character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
Return an empty string if there are no instances of letter in the given string.*/

function comes_after(str, l) {
    const lowerCaseString = str.toLowerCase();
    const lowercaseL = l.toLowerCase();
    const uppercaseL = l.toUpperCase();

    if (lowerCaseString.includes(lowercaseL) || str.includes(l)) {
        let resultString = '';
        const letterPattern = /[a-zA-Z]/;

        for (let i = 0; i < str.length; i++) {
            const actualChar = str[i];
            const nextCharacter = str[i + 1];

            if (i < str.length - 1) {
                if (actualChar == lowercaseL || actualChar == l || actualChar == uppercaseL) {
                    if (letterPattern.test(nextCharacter)) {
                        resultString += nextCharacter;
                    }
                }
            }
        }

        return resultString;
    } else {
        return '';
    }
}

console.log(comes_after('Pirates say arrrrrrrrr', 'r'));