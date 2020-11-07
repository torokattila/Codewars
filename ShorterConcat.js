/*Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.*/

function shorter_reverse_longer(a, b) {
    let shortest = '';
    let longest = '';

    if (a.length == b.length) {
        shortest = b;
        longest = a;
    } else if (a.length < b.length) {
        shortest = a;
        longest = b;
    } else if (b.length < a.length) {
        shortest = b;
        longest = a;
    }

    longest = longest.split('').reverse((a, b) => b - a).join('');

    return shortest + longest + shortest;
}

console.log(shorter_reverse_longer("hello", "bau"));