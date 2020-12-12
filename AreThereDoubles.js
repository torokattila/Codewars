/*Your job is to build a function which determines whether or not there are double characters in a 
string (including whitespace characters). For example aa, !! or .

You want the function to return true if the string contains double characters and false if not. The test 
should not be case sensitive; for example both aa & aA return true.*/

function doubleCheck(str) {
    str = str.toLowerCase().split('');
    let result = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            result = true;
        }
    }

    return result;
}

console.log(doubleCheck('aabc'));