/*Write

function wordPattern(pattern, str)
that given a pattern and a string str, find if str follows the same sequence as pattern.

For example:

wordPattern('abab', 'truck car truck car') === true
wordPattern('aaaa', 'dog dog dog dog') === true
wordPattern('abab', 'apple banana banana apple') === false
wordPattern('aaaa', 'cat cat dog cat') === false
Note: Each letter in the pattern stands for a distinct word*/

function wordPattern(pattern, str) {
    const patternBooleans = [false];
    const strBooleans = [false];
    const strWords = str.split(' ');
    let result = true;

    for (let i = 0; i < pattern.length; i++) {
        if (i > 0) {
            if (pattern[i] !== pattern[i - 1]) {
                patternBooleans.push(true);
            } else {
                patternBooleans.push(false);
            }

            if (strWords[i] !== strWords[i - 1]) {
                strBooleans.push(true);
            } else {
                strBooleans.push(false);
            }
        }
    }

    for (let i = 0; i < patternBooleans.length; i++) {
        if (patternBooleans[i] !== strBooleans[i]) {
            result = false;
        }
    }

    return result;
}

console.log(wordPattern('abab', 'apple banana banana apple'));
