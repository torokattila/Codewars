/*This is a follow up from my kata Insert Dashes.
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and 
asterisk ('*') between each even numbers in num*/

function insertDashII(num) {
    let characters = num.toString().split('');
    let resultString = '';

    for (let i = 0; i < characters.length; i++) {
        if (parseInt(characters[i]) % 2 != 0 && parseInt(characters[i + 1]) % 2 != 0) {
            characters[i] = characters[i] + '-';
        } else if (parseInt(characters[i]) % 2 == 0 && parseInt(characters[i + 1]) % 2 == 0 && (characters[i] != '0' && characters[i + 1] != '0')) {
            characters[i] = characters[i] + '*';
        }

        resultString += characters[i];
    }

    return resultString.slice(-1) == '-' || resultString.slice(-1) == '*' ? resultString.slice(0, -1) : resultString;
}

console.log(insertDashII(40546793));