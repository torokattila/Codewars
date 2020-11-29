/*Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the 
given array whose length is an even number.*/

function filterEvenLengthWords(words) {
    return words.filter(word => {
        return word.length % 2 == 0;
    });
}

console.log(filterEvenLengthWords(['Hello', 'World']))