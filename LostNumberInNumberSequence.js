/*An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, 
then the remaining numbers were mixed. Find the number that was deleted.*/

function findDeletedNumber(arr, mixArr) {

    mixArr = mixArr.sort((a, b) => { return a - b });

    const difference = arr.filter(num => {
        return mixArr.indexOf(num) === -1;
    })

    return difference.length >= 1 ? difference[0] : 0;
}

console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]));