/*You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number 
of numerical palindromes that come after num. If num is a palindrome itself, it should be included 
in the count.

Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.*/

function palindrome(num, s) {
    if ((typeof num != 'number') || (num < 0) || (typeof s != 'number')) {
        return 'Not valid';
    } else {
        let resultArray = [];

        for (let i = num; i < 100000; i++) {
            if ((i.toString().length >= 2) && parseInt(i.toString().split('').reverse().join('')) == i) {
                resultArray.push(i);
            }
        }

        return resultArray.slice(0, s);
    }
}

console.log(palindrome(1221, 2));