/*You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, the the next greatest, and so on...

More info
The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

Examples
[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
[-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
[-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]*/

function mirror(data) {
    if (data.length == 0) {
        return [];
    } else if (data.length == 1) {
        return data;
    } else {
        let copyData = [...data];
        let copyDataForSort = [...data];
        const biggestElement = Math.max.apply(null, copyData);
        let resultArray = [];
        
        copyData.splice(copyData.indexOf(biggestElement), 1);
        copyDataForSort.splice(copyDataForSort.indexOf(biggestElement), 1);

        let descendingVersion = copyData.sort((a, b) => b - a);
        let ascendingVersion = copyDataForSort.sort((a, b) => a - b);
       
        return ascendingVersion.concat(biggestElement).concat(descendingVersion);
    }
}

console.log(mirror([1, 3, 2]));