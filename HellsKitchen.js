/*Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become 
'@', Any other vowel should become '*'.*/

function gordon(a) {
    a = a.toUpperCase();
    a = a.replace(/[eiou]/gi, "*").replace(/[a]/gi, "@");

    return a.split(' ').map(word => {
        word = `${word}!!!!`;

        return word;
    }).join(' ');
}

console.log(gordon("What feck damn cake"));