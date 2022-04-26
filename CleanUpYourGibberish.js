/*We've begun receiving transmissions from Planet Gibber again after many decades of silence. Unfortunately, 
this time they've been all garbled up!

Luckily, linguists were able to figure out the rules of Gibberish the last time we heard from them. 
They've given us a guide on how to identify the actual bits of language from the random data in the strings we receive.

In order to parse the Gibberish from the... well, gibberish, we'll need to follow these rules:

Gibberish, as we read it, only contains letters: remove all non-letter characters (including spaces)
Gibberish is only made up of 5 letter words: separate this into words that are all 5 letters long - no trailing 
words with fewer than 5 letters!
Gibberish word are all capitalised: so capitalise all the words (sort of like German nouns)
Some of the transmissions are only garbled data. If you are given an empty string or a 
string that doesn't contain any letters, then please return an empty string at the end.

Even if you can't read the Gibberish, that's okay as long as you've formatted it according to the language rules!*/

function cleanItUp(sentence) {
    const withoutNonLetters = sentence.replace(/[^a-zA-Z]/g, '');
    if (sentence.length === 0 || withoutNonLetters.length === 0) return '';

    return withoutNonLetters
        .match(/.{1,5}/g)
        .filter((word) => word.length === 5)
        .map(
            (word) =>
                `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
        )
        .join(' ');
}

console.log(
    cleanItUp('!!!sdfh skj!1!Kjk!jkK! jhjkhk    hj!!jh!JKKjjj  jhhH!!')
);
