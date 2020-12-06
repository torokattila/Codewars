/*You will work out the number of candles that will fall from the provided string (y). 
You must add up the character ASCII code of each even indexed (assume a 0 based indexing) 
character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

example: 'abc' --> a=97, b=2, c=99 --> y total = 198.*/

function cake(x, y) {
    const abcPositions = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };
    let numberValuesArray = [];
    let copyY = y;
    copyY = copyY.toLowerCase().split('');

    copyY.forEach((character, index) => {
        if (index % 2 == 0) {
            character = y.charCodeAt(index);
        } else if (index % 2 != 0) {
            character = abcPositions[character];
        }
        
        numberValuesArray.push(character);
    });
    let total = numberValuesArray.reduce((accum, current) => {
        return accum + current;
    });

    return total > (x * 0.70) ? 'Fire!' : 'That was close!';
}

console.log(cake(900, 'abc'));