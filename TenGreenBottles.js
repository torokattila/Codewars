/*Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.
Task
Write some amazing code to reproduce the above lyrics starting from n green bottles!

parameter n is 1 to 10
newline terminates every line (including the last)
don't forget the blank lines between the verses*/

function tenGreenBottles(n) {
    const letterNumbers = {
        0: 'no',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
    };

    const verses = [];

    for (let i = n; i >= 0; i--) {
        if (i > 0) {
            if (i === 1) {
                verses.push(
                    `${letterNumbers[i].charAt(0).toUpperCase() + letterNumbers[i].slice(1).toLowerCase()} green bottle hanging on the wall,\n${letterNumbers[i].charAt(0).toUpperCase() + letterNumbers[i].slice(1).toLowerCase()} green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere'll be ${letterNumbers[i - 1]} green bottles hanging on the wall.\n`
                )
            } else {
                verses.push(
                    `${letterNumbers[i].charAt(0).toUpperCase() + letterNumbers[i].slice(1).toLowerCase()} green bottles hanging on the wall,\n${letterNumbers[i].charAt(0).toUpperCase() + letterNumbers[i].slice(1).toLowerCase()} green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere'll be ${letterNumbers[i - 1]} green ${i - 1 === 1 ? 'bottle' : 'bottles'} hanging on the wall.`
                );
            }
        }
    }

    return verses.join('\n\n');
}

console.log(tenGreenBottles(3));
