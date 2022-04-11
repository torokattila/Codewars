/*In Russia, there is an army-purposed station named UVB-76 or "Buzzer" (see also https://en.wikipedia.org/wiki/UVB-76). 
Most of time specific "buzz" noise is being broadcasted, but on very rare occasions, 
the buzzer signal is interrupted and a voice transmission in Russian takes place. 
Transmitted messages have always the same format like this:

MDZHB 01 213 SKIF 38 87 23 95

or:

MDZHB 80 516 GANOMATIT 21 23 86 25

Message format consists of following parts:

Initial keyword "MDZHB";
Two groups of digits, 2 digits in first and 3 in second ones;
Some keyword of arbitrary length consisting only of uppercase letters;
Final 4 groups of digits with 2 digits in each group.
Your task is to write a function that can validate the correct UVB-76 message. 
Function should return "True" if message is in correct format and "False" otherwise.
*/

function validate(message) {
    const words = message.split(' ');
    if (words.length < 8) return false;
    const uppercasePattern = /^[A-Z]+$/;
    const numberPattern = /[0-9]/;

    return (
        words[0] === 'MDZHB' &&
        words[1].length === 2 &&
        numberPattern.test(words[1]) &&
        words[2].length === 3 &&
        numberPattern.test(words[2]) &&
        uppercasePattern.test(words[3]) &&
        words[4].length === 2 &&
        numberPattern.test(words[4]) &&
        words[5].length === 2 &&
        numberPattern.test(words[5]) &&
        words[6].length === 2 &&
        numberPattern.test(words[6]) &&
        words[7].length === 2 &&
        numberPattern.test(words[7])
    );
}

console.log(validate('MDZHB 85 596 PALEOLIT 81 12 52 91'));
