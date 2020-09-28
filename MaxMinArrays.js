function solve(arr){
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i+=2) {
        arr.splice(i, 0, arr.pop());
    }
    
    return arr;
};

console.log(solve([15, 11 ,10, 7, 12]));