/*Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how much keystrokes you have to do for a specific word.

Return the amount of keystrokes of input str (! only letters, digits and special characters in 
    lowercase included in layout without whitespaces !)

Examples
mobileKeyboard("*#") => 2 (1+1)
mobileKeyboard("123") => 3 (1+1+1)
mobileKeyboard("abc") => 9 (2+3+4)
mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)*/

function mobileKeyboard(str) {
    const oneStrokes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "#"];
    const twoStrokes = ["a", "d", "g", "j", "m", "p", "t", "w"];
    const threeStrokes = ["b", "e", "h", "k", "n", "q", "u", "x"];
    const fourStrokes = ["c", "f", "i", "l", "o", "r", "v", "y"];
    const fiveStrokes = ["s", "z"];
    let keyStrokeCounter = 0;

    str.split("").forEach(character => {
        if (oneStrokes.includes(character)) {
            keyStrokeCounter++;
        } else if (twoStrokes.includes(character)) {
            keyStrokeCounter += 2;
        } else if (threeStrokes.includes(character)) {
            keyStrokeCounter += 3;
        } else if (fourStrokes.includes(character)) {
            keyStrokeCounter += 4;
        } else if (fiveStrokes.includes(character)) {
            keyStrokeCounter += 5;
        }
    });

    return keyStrokeCounter;
}

console.log(mobileKeyboard("codewars"));