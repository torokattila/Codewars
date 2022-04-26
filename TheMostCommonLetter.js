/*Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'*/

function replaceCommon(string, letter) {
    const stringChars = [...string];
    const occurrences = stringChars
        .filter((char) => char !== ' ')
        .reduce((accum, current) => {
            accum[current] = accum[current] ? accum[current] + 1 : 1;
            return accum;
        }, {});
    const mostCommonChar = Object.entries(occurrences).sort((a, b) => {
        if (a[1] === b[1]) {
            if (string.indexOf(a[0]) < string.indexOf(b[0])) return -1;
            if (string.indexOf(a[0] > string.indexOf(b[0]))) return 1;
            return 0;
        } else {
            return b[1] - a[1];
        }
    })[0][0];

    return stringChars
        .map((char) => {
            if (char === mostCommonChar) {
                char = letter;
            }

            return char;
        })
        .join('');
}

console.log(replaceCommon('real talk bro', 'n'));
