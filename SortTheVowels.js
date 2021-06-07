/*In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "Codewars" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Case doesn't matter
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

function sortVowels(s) {
    if (typeof s != 'string') return '';
    
	let resultString = '';
    const characters = [...s];
    const vowelPattern = /[aeiouAEIOU]/;

    for (let i = 0; i < characters.length; i++) {
        if (vowelPattern.test(characters[i])) {
            characters[i] = '|' + characters[i];
        } else {
            characters[i] = characters[i] + '|';
        }

        if (i < characters.length - 1) {
            resultString += characters[i] + '\n';
        } else {
            resultString += characters[i];
        }
        
    }

    return resultString;
}

console.log(sortVowels('Codewars'));
