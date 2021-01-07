/*Jeringonza is a Spanish language game, similar to Pig Latin, played by children in Spain and all over 
Hispanic America. It consists of adding the letter p after each vowel (a, e, i, o or u) of a word, and 
repeating the vowel. For example, jeringonza becomes jeperipingoponzapa (or j-epe-r-ipi-ng-opo-nz-apa).

For the purposes of this kata, the input and output are both strings and no input strings will be empty. 
Also, the added 'p' should match the case of the vowel. So opo for o and EPE for E.*/

function jeringonza(word) {
    const lowercaseVowelPattern = /[aeiou]/;
    const upperCaseVowelPattern = /[AEIOU]/;
    
    return word.split('').map(character => {
        if (lowercaseVowelPattern.test(character)) {
            character = `${character}p${character}`;
        } else if (upperCaseVowelPattern.test(character)) {
            character = `${character}P${character}`;
        }
        
        return character;
    }).join('');
}

console.log(jeringonza('Played in Spain and across Latin America'))