/*Write a function that removes every lone 9 that is inbetween 7s.*/

function sevenAte9(str) {
    let resultString = '';
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '9' && str[i - 1] == '7' && str[i + 1] == '7') {
            str[i] = '';
        }

        resultString += str[i];
    }

    return resultString;
}

console.log(sevenAte9('79712312'));