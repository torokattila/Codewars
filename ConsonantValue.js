/*Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49.
The highest is 57.*/
function solve(s) {
    var characters = s.split('');
    var substringsArray = [];
    var vowels = /[aeiou]/i;
    var substring = '';
    var numberValues = Array.apply(null, Array(26)).map(function (value, index) { return index + 1; });
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersWithValues = {};
    alphabet.forEach(function (character, index) {
        lettersWithValues[character] = numberValues[index];
    });
    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        if (!vowels.test(char)) {
            substring += char;
        }
        if (vowels.test(char) || i === characters.length - 1) {
            if (substring !== '') {
                substringsArray.push(substring);
            }
            substring = '';
        }
    }
    substringsArray = substringsArray.map(function (item) {
        item = item
            .split('')
            .map(function (item) { return lettersWithValues[item]; })
            .reduce(function (accum, curr) { return accum + curr; })
            .toString();
        return item;
    });
    return Number(substringsArray.sort(function (a, b) { return Number(b) - Number(a); })[0]);
}
console.log(solve('strength'));
