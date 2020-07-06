function getCount(str) {
    let vowelsCount = 0;
    let characterArray = str.split("");
    let tempArray = [];

    characterArray.forEach((character) => {
        if (character === 'y') {
            return;
        } else {
            if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
                tempArray.push(character);
            }
        }

        vowelsCount = tempArray.length;
    });

    return vowelsCount;
}

console.log(getCount("pear tree"));