/*We will call a natural number a "doubleton number" if it contains exactly two distinct digits. 
For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. 
If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12*/

function isDoubleton(num) {
    let characterCollection = new Set();

    num.toString().split('').forEach(character => {
        characterCollection.add(character);
    });

    return Array.from(characterCollection).length == 2;
}

function doubleton(num) {
    if (isDoubleton(num)) {
        let nextBiggerThanN = 0;

        for (let i = num + 1; i <= 1000000; i++) {
            if (isDoubleton(i)) {
                nextBiggerThanN = i;
                break;
            }
        }

        return nextBiggerThanN;
    } else {
        let nextDobleton = 0;

        for (let i = num + 1; i <= 1000000; i++) {
            if (isDoubleton(i)) {
                nextDobleton = i;
                break;
            }
        }

        return nextDobleton;
    }
}

console.log(doubleton(120));