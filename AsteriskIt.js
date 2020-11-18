/*You are given a function that should insert an asterisk (*) between every pair of even digits 
in the given input, and return it as a string. If the input is a sequence, concat the elements first 
as a string.*/

function asteriscIt(n) {
    let resultString = '';

    if (Array.isArray(n)) {
        n = n.join('').split('');
    } else {
        n = n.toString().split('');
    }

    for (let i = 0; i < n.length; i++) {
        if (parseInt(n[i]) % 2 == 0 && parseInt(n[i + 1]) % 2 == 0) {
            n[i] = n[i] + '*';
        }

        resultString += n[i];
    }

    return resultString;
};

console.log(asteriscIt([1, 4, 64, 68, 67, 23, 1]));