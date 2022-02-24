/*You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't speak, 
and when he wants to say something, he writes it down on a paper. However, none of the words he writes make sense to you. 
He wants to help you, so he points at a beer and writes "yvvi". You start to understand what he's trying to say, 
and you write a script, that decodes his words.

Keep in mind that numbers, as well as other characters, can be part of the input, and you should keep them like they are. 
You should also test if the input is a string. If it is not, return "Input is not a string".*/

function decode(str) {
    if (typeof str !== 'string') return 'Input is not a string';
    const lowerLetterParrern = /[a-z]/;
    const upperLettetrPattern = /[A-Z]/;

    return str
        .split('')
        .map((char) => {
            if (lowerLetterParrern.test(char)) {
                if (char === 'm') {
                    char = 'n';
                } else if (char === 'n') {
                    char = 'm';
                } else if (char.charCodeAt() < 109) {
                    char = String.fromCharCode(122 - (char.charCodeAt() - 97));
                } else if (char.charCodeAt() > 110) {
                    char = String.fromCharCode(97 + (122 - char.charCodeAt()));
                }
            } else if (upperLettetrPattern.test(char)) {
                if (char === 'M') {
                    char = 'N';
                } else if (char === 'N') {
                    char = 'M';
                } else if (char.charCodeAt() < 77) {
                    char = String.fromCharCode(90 - (char.charCodeAt() - 65));
                } else if (char.charCodeAt() > 78) {
                    char = String.fromCharCode(65 + (90 - char.charCodeAt()));
                }
            }

            return char;
        })
        .join('');
}

console.log(decode(`Ovg'h hdrn rm gsv ulfmgzrm!`));
