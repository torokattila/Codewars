/*You are given a String of one or more words. Your task is to check the length of each word and if it's 
less than 4, you keep it unmodified otherwise you find out the first vowel which is coming after 3-rd 
character and replace vowel and rest of word with a dot. Finally, you should return the same string but 
shorten (only if the length of words is more then 3 characters).

Please note :

1) You are not asked to trim anything.

2) Apostrophes are part of words.

3) Commas following shortened words are considered characters and should be removed.

Examples:

shortenSpeech( "Hello, do you want a coffee ? " ) => returns "Hell. do you want a coff. ? "

shortenSpeech( "Hey fellow warriors !" ) => returns "Hey fell. warr. !"

shortenSpeech( "This is a test") => returns "This is a test"*/

var shortenSpeech = function (str) {
    const vowels = /[aeiou]/gi;
    return str.split(' ').map(word => {
        if (word.length >= 4 && word.match(vowels) != null && word.match(vowels).length > 0) {
            for (let i = 0; i < word.length; i++) {
                if (i > 2) {
                    if (vowels.test(word[i])) {
                        word = word.substr(0, i) + '.';
                        break;
                    }
                }
            }
        } else {
            word = word;
        }

        return word;
    }).join(' ');
}

console.log(shortenSpeech("Hello, do you want a coffee ? "))