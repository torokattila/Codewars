/*Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]*/

function box(num) {
    const padding = num - 2;
    const result = [];

    for (let i = 1; i <= num; i++) {
        if (i === 1 || i === num) {
            result.push('-'.repeat(num));
        } else {
            result.push(`-${' '.repeat(padding)}-`);
        }
    }

    return result;
}

console.log(box(5));
