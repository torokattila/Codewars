function reverseWords(str) {
    let words = str.split(' ');
    let resultString = '';

    for (let i = 0; i < words.length; i++) {
        if (i == words.length - 1) {
            resultString += words[i].split('').reverse().join('');    
        } else {
            resultString += words[i].split('').reverse().join('') + ' ';
        }
    }

    return resultString;
}

console.log(reverseWords("double  spaces"));