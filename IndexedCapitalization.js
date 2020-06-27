function capitalize(s, arr) {
    let characterArray = s.split("");

    for (let i = 0; i < characterArray.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                characterArray[i] = characterArray[i].toUpperCase();
            }
        }
    }

    return characterArray.join("");
};

console.log(capitalize("abcdef", [1, 2, 5]));