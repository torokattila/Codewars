/*In some locales (like the US) large numbers are displayed with commas every 3 digits to help users 
understand the size of the number at a glance.

You're going to write a function to format a number for display in that way.
For example:

displayLargeNumber(1234); // "1,234"
displayLargeNumber(1234567); // "1,234,567"*/

function displayLargeNumber(n) {
    n = n.toString();
    let result = '';

    if (n.length == 1) {
        return n;
    } else {
        if (n.length == 9) {
            return n.toString().match(/.{3}/g).join(',');
        } else {
            n = n.split('');

            for (let i = 0; i < n.length; i++) {
                if (i == 0) {
                    n[i] = n[i] + ',';
                } else if (i % 3 == 0) {
                    n[i] = n[i] + ',';
                }

                result += n[i];
            }
        }

        return result[result.length - 1] == ',' ? result.slice(0, -1) : result;
    }
}

console.log(displayLargeNumber(123456789));