/*Your task is to find the number couple with the greatest difference from a given array of number-couples.

All number couples will be given as strings and all numbers in them will be positive integers.

For instance: ['56-23','1-100']; in this case, you should identify '1-100' 
as the number couple with the greatest difference and return it.

In case there are more than one option, for instance ['1-3','5-7','2-3'], you should identify whichever is first, 
so in this case '1-3'.

If there is no difference, like so ['11-11', '344-344'], return false.*/

function diff(str) {
    const diffsWithIndices = [];

    str.forEach((range, index) => {
        const numsArray = range.split('-');
        const difference =
            Number(numsArray[0]) > Number(numsArray[1])
                ? Number(numsArray[0]) - Number(numsArray[1])
                : Number(numsArray[1]) - Number(numsArray[0]);

        diffsWithIndices.push({
            range: numsArray.join('-'),
            difference,
            index,
        });
    });

    const onlyDifferences = diffsWithIndices.map((item) => item.difference);
    if (
        onlyDifferences[0] === 0 &&
        onlyDifferences.every((item) => item === onlyDifferences[0])
    )
        return false;

    const sortedDiffsWithIndices = diffsWithIndices.sort((a, b) => {
        if (a.difference === b.difference) {
            if (a.index < b.index) return -1;
            if (a.index > b.index) return 1;
            return 0;
        } else {
            return b.difference - a.difference;
        }
    });

    return sortedDiffsWithIndices[0].range;
}

console.log(
    diff(['43-45', '1021-55', '000-18888', '92-34', '76-32', '99-1', '1020-54'])
);
