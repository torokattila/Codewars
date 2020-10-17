//Your task is to determine whether the numbers are in ascending order. 

function inAscOrder(arr) {
    let copiedArray = [...arr];
    copiedArray.sort((a, b) => { return a - b });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== copiedArray[i]) return false;
    }

    return true;
}

console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));