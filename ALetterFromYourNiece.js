/*Your sweet 4 year old niece has sent you a letter, however she is a little bit of an odd ball, 
so it needs a bit of decoding. You see she seems to love dinosars and often throws "trex" and "raptor" in mid 
sentence when she gets excited, and is convinced all vowels should be replaced by numbers 
(a=0, e=1, i=2, o=3, u=4).

Your challenge is to figure out what she is trying to say and fix her grammar- HINT - All sentences begin 
with a capital letter, end in a full stop and "I" should be capitalised, no need for capitals for names, 
she's only 4 after all :)*/

function nonsense(str) {
    str = str.replace(/trex/gi, '');
    str = str.replace(/raptor/gi, '');
    const vowels = {
        '0': 'a', '1': 'e', '2': 'i', '3': 'o', '4': 'u'
    };
    const strChars = str.split('');
    let resultString = '';

    strChars.forEach(character => {
        if (vowels[character]) {
            str = str.replace(character, vowels[character]);
        }
    })

    const replacedStrChars = str.toLowerCase().split('');

    for (let i = 0; i < replacedStrChars.length; i++) {
        if ((i < replacedStrChars.length - 1 && replacedStrChars[i] == 'i' && replacedStrChars[i - 1] == ' ' && replacedStrChars[i + 1] == ' ') || (i == 0 && replacedStrChars[i] == 'i' && replacedStrChars[i + 1] == ' ')) {
            replacedStrChars[i] = 'I';
        }
        resultString += replacedStrChars[i];
    }

    if (resultString.charAt(resultString.length - 1) != '.') {
        resultString = resultString.charAt(0).toUpperCase() + resultString.slice(1) + '.';
    } else {
        resultString = resultString.charAt(0).toUpperCase() + resultString.slice(1);
    }

    return resultString;
}

console.log(nonsense('d2n3S04Rs 0r1 c33L.'));