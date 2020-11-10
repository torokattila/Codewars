/*A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Given a number determine if it Automorphic or not .*/

function automorphic(n) {
    let squareN = Math.pow(n, 2).toString();
    const nLength = n.toString().length;

    return parseInt(squareN.substring(squareN.length - nLength)) == n ? 'Automorphic' : 'Not!!';
}

console.log(automorphic(25))