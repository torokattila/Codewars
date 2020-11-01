// Group items by category

function solution(input) {
    let grocerObject = {
        fruit: [],
        meat: [],
        other: [],
        vegetable: []
    }
    let resultString = '';

    input = input.split(',');

    input.forEach(item => {
        if (item.includes("fruit")) {
            grocerObject.fruit.push(item.substring(item.indexOf('_') + 1, item.length));
            grocerObject.fruit.sort();
        } else if (item.includes("meat")) {
            grocerObject.meat.push(item.substring(item.indexOf('_') + 1, item.length));
            grocerObject.meat.sort();
        } else if (item.includes("vegetable")) {
            grocerObject.vegetable.push(item.substring(item.indexOf('_') + 1, item.length));
            grocerObject.vegetable.sort();
        } else {
            grocerObject.other.push(item.substring(item.indexOf('_') + 1, item.length));
            grocerObject.other.sort();
        }
    })

    for (const [key, value] of Object.entries(grocerObject)) {
        resultString += key + ':' + value + '\n';
    }

    return resultString.slice(0, -1);
}

console.log(solution("fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"));