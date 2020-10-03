function scrabbleScore(str) {
    if (str.length == 0) {
        return 0;
    }
    str = str.toLowerCase().replace(/\s/g, '');
    let characters = str.split('');
    let scores = {
        a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10
    }
    let numbersArray = [];

    characters.forEach(character => {
        if (scores[character]) {
            str = str.replace(character, '+' + scores[character]);
        }
    })

    str.split('+').forEach(item => {
        if (!Number.isNaN(parseInt(item))) {
            numbersArray.push(parseInt(item));
        }
    })

    return numbersArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
}

console.log(scrabbleScore("quirky"));