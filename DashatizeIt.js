/*Given a number, return a string with dash'-'marks before and after each odd integer, but do not 
begin or end the string with a dash mark.*/

function dashatize(num) {
    let resultString = '';

    if (isNaN(num)) {
        return 'NaN';
    } else if (num < 0) {
        num = Math.abs(num);
    }

    num = num.toString().split('');

    num.forEach(item => {
        if (parseInt(item) % 2 != 0) {
            item = '-' + item + '-';
        }

        resultString += item;
    });

    resultString = resultString.replace(/--/gi, '-');

    if (resultString.charAt(0) == '-' && resultString.charAt(resultString.length - 1) == '-') {
        return resultString.substring(1, resultString.length - 1);
    } else if (resultString.charAt(0) == '-' && resultString.charAt(resultString.length - 1) != '1') {
        return resultString.substring(1)
    } else if (resultString.charAt(0) != '-' && resultString.charAt(resultString.length - 1) == '-') {
        return resultString.substring(0, resultString.length - 1);
    } else {
        return resultString;
    }
}

console.log(dashatize(86320));