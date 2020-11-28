/*Remove or add a exclamation mark at the end of words of the sentence. Words are 
separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; 
If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, 
keep it.*/

function removeOrAdd(s) {
    s = s.split(' ');

    for (let i = 0; i < s.length; i++) {
        if (s[i].slice(-2) == '!!') {
            continue;
        } else if (s[i].charAt(s[i].length - 1) == '!') {
            s[i] = s[i].substring(0, s[i].length - 1);
        } else if (s[i].charAt(s[i].length - 1) != '!') {
            s[i] = s[i] + '!'
        }
    }

    return s.join(' ');
}

console.log(removeOrAdd('!Hi! !Hi !Hi!!'))