/*Groups of characters decided to make a battle. Help them to figure out what group is more powerful. 
Create a function that will accept 2 variables and return the one who's stronger.

Rules:
Each character has its own power:
  A = 1, B = 2, ... Y = 25, Z = 26
  a = 0.5, b = 1, ... y = 12.5, z = 13
Only alphabetical characters can and will participate in a battle.
Only two groups to a fight.
Group whose total power (a + B + c + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("One", "Two"); // => "Two"`
  battle("ONE", "NEO"); // => "Tie!"
*/

function battle(x, y) {
    const upperValues = {};
    const lowerValues = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCharValues = Array.apply(null, Array(26)).map(
        (item, index) => index + 1
    );
    const lowerCharValues = [];
    const lowerChars = alphabet.toLowerCase().split('');

    for (let i = 0.5; i <= alphabet.length / 2; i += 0.5) {
        lowerCharValues.push(i);
    }

    alphabet.split('').forEach((char, index) => {
        upperValues[char] = upperCharValues[index];
    });

    lowerChars.forEach((char, index) => {
        lowerValues[char] = lowerCharValues[index];
    });

    const xResult = x
        .split('')
        .map((char) =>
            upperValues[char] ? upperValues[char] : lowerValues[char]
        )
        .reduce((accum, current) => accum + current);
    const yResult = y
        .split('')
        .map((char) =>
            upperValues[char] ? upperValues[char] : lowerValues[char]
        )
        .reduce((accum, current) => accum + current);

    return xResult === yResult ? 'Tie!' : xResult > yResult ? x : y;
}

console.log(battle('Four', 'Five'));
