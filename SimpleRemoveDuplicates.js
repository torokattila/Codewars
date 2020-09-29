function solve(arr){
    let uniqueArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i])
        }
    }

    return uniqueArray.reverse();
}

console.log(solve([3,4,4,3,6,3]));