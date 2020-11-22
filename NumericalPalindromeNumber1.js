/*For a given number num, write a function to test if it's a numerical palindrome or not and 
return a boolean (true if it is and false if not).*/

function palindrome(num) {
    if ((typeof num != 'number') || num < 0) {
        return 'Not valid';
    } else {
        let reverseNumber = parseInt(num.toString().split('').reverse().join(''));
        console.log(reverseNumber, num);

        return num === reverseNumber;
    }
} 

console.log(palindrome(1221))