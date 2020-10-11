function reverseNumber(n) {
    n = n.toString();
    let splittedN;
    let resultNumber = 0;

    if (n.charAt(0) == '-') {
        splittedN = n.split('-');

        resultNumber = parseInt('-' + splittedN[1].split('').reverse((a, b) => { return a - b; }).join(''));
    } else {
        resultNumber = parseInt(n.split('').reverse((a, b) => { return a - b; }).join(''));
    }

    return resultNumber;
}

console.log(reverseNumber(123));