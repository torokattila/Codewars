/*You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, 
can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" 
after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of these letters. After turning the sheet, this word can 
also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, 
the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). String contains only 
uppercase letters and digits.

Examples
shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
shifter("TASK") == 0 // no shifter words
shifter("") == 0 // no shifter words in empty string*/

function shifter(s) {
    const shiftCharacterPattern = /^[\sHINOSXZWM]+$/;
    const sWords = s.split(' ');
    let shiftWordsSet = new Set();

    sWords.forEach(word => {
        if (word.match(shiftCharacterPattern)) {
            shiftWordsSet.add(word);
        }
    });

    return Array.from(shiftWordsSet).length;
}

console.log(shifter("BACK HELD MS KNOW NO"));