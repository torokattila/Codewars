/*
You have two arrays in this kata, every array contain only unique elements. 
Your task is to calculate number of elements in first array which also are in second array.*/

function matchArrays(v, r) {
    return v.filter((item) => r.includes(item)).length;
}

console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));
