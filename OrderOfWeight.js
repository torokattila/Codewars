/*Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.*/

function arrange(arr) {
    let itemWithConvertion = {};

    arr.forEach(weight => {
        if (weight.includes('G') && !weight.includes('K')) {
            const objectValue = parseInt(weight.slice(0, -1));
            
            itemWithConvertion[weight] = objectValue;
        } else if (weight.includes('KG')) {
            const objectValue = parseInt(weight.slice(0, -2)) * 1000;

            itemWithConvertion[weight] = objectValue;
        } else if (weight.includes('T')) {
            const objectValue = parseInt(weight.slice(0, -1)) * 1000000;

            itemWithConvertion[weight] = objectValue;
        }
    });

    return Object.keys(itemWithConvertion).sort((a, b) => itemWithConvertion[a] - itemWithConvertion[b]);
}

console.log(arrange(["4T","300G","450G","900KG"]));