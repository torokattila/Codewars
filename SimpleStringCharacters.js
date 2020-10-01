function solve(s) {
    let resultArray = [];
    let specialCounter = 0;
    let upperCaseCounter = 0;
    let lowerCaseCounter = 0;
    let numberCounter = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i].match('[A-Z]')) {
            upperCaseCounter++;
        } else if (s[i].match('[a-z]')) {
            lowerCaseCounter++;
        } else if (s[i].match('[0-9]')) {
            numberCounter++;
        } else if (s[i].match('[!?<>+@#\$\'\"%\^\&*\)\(+=.,_-]')) {
            specialCounter++;
        }
    }

    resultArray[0] = upperCaseCounter;
    resultArray[1] = lowerCaseCounter;
    resultArray[2] = numberCounter;
    resultArray[3] = specialCounter;

    return resultArray;
}

console.log(solve("*'&ABCDabcde12345"));