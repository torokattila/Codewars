/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered 
valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.*/

function isValidIP(str) {
    let isValid = true;
    const numberPattern = /^\d+(\.\d+)*$/;

    if (str.split('.').length != 4) {
        isValid = false;
    } else {
        str.split('.').forEach(ip => {
            if (!numberPattern.test(ip) || !(parseInt(ip) >= 0 && parseInt(ip) <= 255) || (ip.startsWith('0') && ip.length > 1)) {
                isValid = false;
            }
        });
    }

    return isValid;
}

console.log(isValidIP('00.31.5.240'));