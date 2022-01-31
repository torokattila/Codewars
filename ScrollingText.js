/*Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, 
in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" 
]*/

function scrollingText(text) {
    let upperText = text.toUpperCase();
    let length = upperText.length - 1;
    let tempString;
    const result = [];

    for (let j = 0; j < length + 1; j++) {
        let i = 0;
        tempString = upperText[length];

        while (i < length) {
            tempString += upperText[i];
            i++;
        }
        result.push(tempString);
        upperText = tempString;
    }

    return result.reverse();
}

console.log(scrollingText('codewars'));
