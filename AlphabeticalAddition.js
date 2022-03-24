/*Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'*/

function addLetters(...letters) {
    const input = [...letters];
    if (input.length === 0) return 'z';
    let sum = 0;
    const letterValues = {};
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((char) => {
        letterValues[char] = char.charCodeAt() - 96;
    });

    input.forEach((char) => {
        sum += letterValues[char];
        if (sum > 26) {
            sum = sum % 26;
        }
    });

    return String.fromCharCode(sum + 96);
}

console.log(addLetters('y', 'c', 'b'));
