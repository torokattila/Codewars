/*You have to write a function pattern which creates the following pattern upto n number of rows. 
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

##Examples:

pattern(4):

1234
234
34
4
*/

function pattern(n) {
    let output = '';

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            output += j;
        }

        if (i != n) {
            output += '\n';
        }
    }

    return output;
}

console.log(pattern(4));