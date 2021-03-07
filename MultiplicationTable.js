/*Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]*/

multiplicationTable = function (size) {
    let resultArray = [];

    for (let i = 1; i <= size; i++) {
        let subArray = [];
        for (let j = 1; j <= size; j++) {
            subArray.push(i * j);
        }

        resultArray.push(subArray);
    }

    return resultArray;
}

console.log(multiplicationTable(3));