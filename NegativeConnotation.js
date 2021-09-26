/*You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), 
you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false*/

function connotation(str) {
    const strWords = str.split(" ");
    let positiveCounter = 0;
    let negativeCounter = 0;
    const positivePattern = /[a-mA-M]/;
    const negativePattern = /[m-zM-Z]/;

    strWords.forEach(word => {
        if (positivePattern.test(word.charAt(0))) {
            positiveCounter++;
        } else if (negativePattern.test(word.charAt(0))) {
            negativeCounter++;
        }
    });

    return positiveCounter >= negativeCounter;
}

console.log(connotation("Is  this the  best  Kata?"));