function high(x) {
    x = x.toLowerCase();
    const wordsArray = x.split(' ');
    const characters = x.split('');
    const scores = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    let numbersArray = [];
    let sumArray = [];

    characters.forEach(character => {
        if (scores[character]) {
            x = x.replace(character, '+' + scores[character]);
        }
    });

    x.split(' ').forEach(word => {
        numbersArray.push(word);
    });

    const normalNumbersArray = numbersArray.map((e) => {
        return e.split('+').map(Number);
    })

    for (let i = 0; i < normalNumbersArray.length; i++) {
        const reduced = (acc, curr) => acc + curr;

        sumArray.push(normalNumbersArray[i].reduce(reduced));
    }

    const indexOfMaxValue = sumArray.indexOf(Math.max(...sumArray));

    return wordsArray[indexOfMaxValue];
}

console.log(high('what time are we climbing up the volcano'));