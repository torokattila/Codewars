/*Find the most common Data Type within a given array.

For Example, ['1', '2', 2] should return 'string'.

If there are any ties at all then just return 'We got a tie!'*/

class CommonDatatypes {
    check(arr) {
        const occurrences = {};

        arr.forEach((data) => {
            return occurrences[typeof data]
                ? occurrences[typeof data]++
                : (occurrences[typeof data] = 1);
        });

        const sortedEntries = Object.entries(occurrences).sort(
            (a, b) => b[1] - a[1]
        );
        if (sortedEntries.length > 0) {
            if (sortedEntries[0][1] === sortedEntries[1][1]) {
                return 'We got a tie!';
            } else {
                return sortedEntries[0][0];
            }
        } else {
            return sortedEntries[0][0];
        }
    }
}

const cdt = new CommonDatatypes();
console.log(cdt.check([true, true, true, true, 12, 'yo']));
