/*The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. 
It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

eg:-

original number =2997 , n=3
2997 = 222+999+999+777 and here each digit is concatenated three times.

original number=-2997 , n=3

-2997 = -222-999-999-777 and here each digit is concatenated three times.

Write afunction named check_concatenated_sum that tests if a number has this generalized property.*/

function checkConcatenatedSum(number, n) {
    let resultString = '';
    let modifiedNumbersArray = [];
    let numberCharacters = [];

    if (n <= 0) {
        return false;
    } else {
        if (number < 0) {
            numberCharacters = number.toString().substring(1).split('');
        } else {
            numberCharacters = number.toString().split('');
        }
    
        modifiedNumbersArray = numberCharacters.map(num => {
            num = Array(n + 1).join(num);
            return num;
        });
    
        if (number < 0) {
            resultString += '-' + modifiedNumbersArray.join('-');
        } else {
            resultString += modifiedNumbersArray.join('+');
        }
    
        return eval(resultString) == number;
    }
    
}

console.log(checkConcatenatedSum(-2997, 0))