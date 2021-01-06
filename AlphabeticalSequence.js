/*In this kata you will be given a random string of letters and tasked with returning them as a string of 
comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character 
followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.*/

function alphaSeq(str) {
    const sortedStringChars = str.toLowerCase().split('').sort();
    const alphabeticalPosition = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    };
    let resultString = '';
    let resultArray = [];

    sortedStringChars.forEach(character => {
        let valueOfCharacter = alphabeticalPosition[character];

        for (let i = 0; i < valueOfCharacter; i++) {
            resultString += character;
        }
        resultString += ',';
    });

    resultArray.push(resultString);
    return resultArray[0].split(',').map(string => {
        string = string.charAt(0).toUpperCase() + string.slice(1);

        return string;
    }).join(',').slice(0, -1);
}

console.log(alphaSeq("ZpglnRxqenU"));