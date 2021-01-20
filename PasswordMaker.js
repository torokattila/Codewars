/*One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a 
password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the 
number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"*/

function makePassword(phrase) {
    phrase = phrase.split(' ');

    return phrase.map(words => {
        words = words.charAt(0);

        if (words == 'i' || words == 'I') {
            words = '1';
        } else if (words == 'o' || words == 'O') {
            words = '0';
        } else if (words == 's' || words == 'S') {
            words = '5';
        }

        return words;
    }).join('');
}

console.log(makePassword("Nbe OkP lQh foqNt ZJJsUu TTuFVM bH INJje Hi"));