/*Your task is to write an update for a lottery machine. Its current version produces a sequence of 
random letters and integers (passed as a string to the function). Your code must filter out all letters and 
return unique integers as a string, in their order of first appearance. If there are no integers in the string 
return "One more run!"*/

function lottery(str) {
    let numbersSet = new Set();
    const numberPattern = /[0-9]/;

    str.split('').forEach(character => {
        if (numberPattern.test(character)) {
            numbersSet.add(character);
        }
    });

    const setArray = Array.from(numbersSet);

    return setArray.length == 0 ? 'One more run!' : setArray.join('');
}

console.log(lottery('wQ8Hy0y5m5oshQPeRCkG'));