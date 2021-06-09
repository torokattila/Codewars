/*Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. 
Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. 
For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, 
for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".*/

function i(word) {
	const consonantPattern = /[bcdfghjklmnpqrstvwxys]/i;
    const vowelPattern = /[aeiou]/i;
    let consonantCounter = 0;
    let vowelCounter = 0;

    word.split('').forEach(character => {
        if (consonantPattern.test(character)) {
            consonantCounter++;
        } else if (vowelPattern.test(character)) {
            vowelCounter++;
        }
    });

    if (word.charAt(0) == 'I' || vowelCounter >= consonantCounter || (word.charAt(0).toLowerCase() == word.charAt(0))) {
        return 'Invalid word';
    } else {
        return `i${word}`;
    }
}

console.log(i("Programmer"));
