/*Complete the method so that it formats the words into a single comma separated value. 
The last word should be separated by the word 'and' instead of a comma. The method takes in 
an array of strings and returns a single formatted string. Empty string values should be ignored. 
Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""*/

function formatWords(words) {
    if (words == null || words.length == 0) {
        return '';
    } else {
        const filteredWords = words.filter(word => word != '' && word != null);
        let resultString = '';

        if (filteredWords.length == 1) {
            return filteredWords[0];
        } else {
            for (let i = 0; i < filteredWords.length; i++) {
                if (i == filteredWords.length - 1) {
                    filteredWords[i] = ' and ' + filteredWords[i];
                } else if (i != filteredWords.length - 2) {
                    filteredWords[i] = filteredWords[i] + ', ';
                }
    
                resultString += filteredWords[i];
            }
    
            return resultString;
        }
    }
}

console.log(formatWords(['three']));