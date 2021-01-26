/*Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
The reverse function should NOT modify the original string.*/

String.prototype.reverse = function () {
    let copyValueWords = this.valueOf().split(' ');

    return copyValueWords.map(word => {
        word = word.split('').reverse().join('');

        return word;
    })
        .join(' ')
        .split(' ')
        .reverse()
        .join(' ');
}

console.log('Super awesome string'.reverse());