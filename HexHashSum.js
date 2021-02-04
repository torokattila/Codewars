/*Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii 
code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113*/

function hexHash(code) {
    let resultString = '';
    const numberPattern = /[0-9]/;
    let sum = 0;

    resultString = code.split('').map(character => {
        character = character.charCodeAt().toString(16);

        return character;
    }).join('');

    resultString.split('').forEach(character => {
        if (numberPattern.test(character)) {
            sum += parseInt(character);
        }
    })

    return sum;
}

console.log(hexHash("Hello, World!"));