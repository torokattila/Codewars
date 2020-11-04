/*Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd 
numbers in num. For example: if num is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number.*/

function insertDash(num) {
    num = num.toString().split('');
    let resultString = ''

    for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) % 2 != 0 && parseInt(num[i + 1]) % 2 != 0) {
            num[i] = num[i] + '-';
        }

        resultString += num[i]
    }

    return resultString.charAt(resultString.length - 1) == '-' ? resultString.slice(0, -1) : resultString;
}

console.log(insertDash(454793))
