/* In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet 
and if each letter occurs only once. */

function solve(s) {
    s = s.toLowerCase().split('').sort().join('');
    let result = true;
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charCodeAt(i + 1) - s.charCodeAt(i) != 1) {
            result = false;
        }
    }

    return result;
}

console.log(solve("aecdb"));