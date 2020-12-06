/*Hidden within the provided array of arrays are numbers that represent the letters of the words for some 
of Chuck's favourite things! Your job is to translate them, and return the words so that Chuck can get back 
to the business of punching and kicking things.*/

function fistBeard(arr) {
    let characterArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            characterArray.push(String.fromCharCode(arr[i][j]));
        }
    }

    return characterArray.join('');
}

console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]));