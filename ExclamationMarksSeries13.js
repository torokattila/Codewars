/*Count the number of exclamation marks and question marks, return the product.*/

function product(s) {
    let exclamationCounter = 0;
    let questionMarkCounter = 0;

    s.split('').forEach(character => {
        if (character == '!') {
            exclamationCounter++;
        } else if (character == '?') {
            questionMarkCounter++;
        }
    });

    return exclamationCounter * questionMarkCounter;
}

console.log(product("!!!??"));