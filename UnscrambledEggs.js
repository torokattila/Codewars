/*The string given to your function has had an "egg" inserted directly after each consonant. You need to 
return the string before it became eggcoded.
Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
"B---eg---in---n---er---"*/

function unscrambleEggs(word) {
    word = word.replace(/egg/gi, '');
    return word;
}

console.log(unscrambleEggs("Beggegeggineggneggeregg"))