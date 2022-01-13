/*You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests*/

function validateHello(greetings) {
    const languages = [
        'hello',
        'ciao',
        'salut',
        'hallo',
        'hola',
        'ahoj',
        'czesc',
    ];
    let result = false;
    const lowerCaseGreetingsWords = greetings
        .replace(/[^a-zA-Z ]/g, '')
        .toLowerCase()
        .split(' ');

    for (let i = 0; i < lowerCaseGreetingsWords.length; i++) {
        const word = lowerCaseGreetingsWords[i];

        if (languages.includes(word)) result = true;
    }

    return result;
}

console.log(
    validateHello(
        'HeLLo aRE tRes? qUE dOinG; ViSTA la quE tRes; you; TrEs La, YOU; hOMbRE doiNg hoMBRe? yOu DOING? La CzEsC? HOW,'
    )
);
