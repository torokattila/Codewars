//Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

function toLeetSpeak(str) {
    const characters = str.split('');
    const dialect = {
        A: '@',
        B: '8',
        C: '(',
        D: 'D',
        E: '3',
        F: 'F',
        G: '6',
        H: '#',
        I: '!',
        J: 'J',
        K: 'K',
        L: '1',
        M: 'M',
        N: 'N',
        O: '0',
        P: 'P',
        Q: 'Q',
        R: 'R',
        S: '$',
        T: '7',
        U: 'U',
        V: 'V',
        W: 'W',
        X: 'X',
        Y: 'Y',
        Z: '2'
    }

    characters.forEach(character => {
        if (dialect[character]) {
            str = str.replace(character, dialect[character]);
        }
    })

    return str;
}

console.log(toLeetSpeak("LEET"))