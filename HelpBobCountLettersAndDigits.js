/*He needs you to create a method that can determine how many letters and digits are in a given string.*/

function countLettersAndDigits(input) {
    let counter = 0;

    input.split('').forEach(character => {
        if (/[a-zA-Z0-9]/.test(character)) {
            counter++;
        }
    });

    return counter;
}

console.log(countLettersAndDigits('alma123'));