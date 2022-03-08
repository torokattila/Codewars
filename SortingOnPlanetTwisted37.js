/*There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: 
#The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
There is no need for a precheck. The array will always be not null and will always contain at least one number.

You should not modify the input array!*/

function sortTwisted37(array) {
    const itemsWithValues = [];

    array.forEach((item) => {
        if (item === 37) {
            itemsWithValues.push([item, 73]);
        } else if (item === 73) {
            itemsWithValues.push([item, 37]);
        } else if (`${item}`.includes('3')) {
            itemsWithValues.push([item, Number(`${item}`.replace(/3/g, '7'))]);
        } else if (`${item}`.includes('7')) {
            itemsWithValues.push([item, Number(`${item}`.replace(/7/g, '3'))]);
        } else {
            itemsWithValues.push([item, item]);
        }
    });

    return itemsWithValues.sort((a, b) => a[1] - b[1]).map((item) => item[0]);
}

console.log(
    sortTwisted37([
        -13, 34, 62, 61, 52, 15, 62, -14, 12, -11, 55, 11, -10, 39, 48, 53, -7,
        75, -27, 63, 41,
    ])
);
