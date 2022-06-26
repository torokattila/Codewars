/*Write a simple converter for vowels.

      Romaji:    a/A e/E i/I u/U o/O
      Hiragana:  あ  え   い  う   お 
      Katakana:  ア  エ   イ  ウ   オ
Expect the above characters as input. There won't be invalid input.

Rules:

If there is no input return an empty string. 
Do not change romaji. (a->a, A->A ... NOT A->a )
Change Kana to lower case romaji. (あ->a ... NOT あ->A)
Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
Example 1:

Input: "aeiou" 
Output:"hiragana"

Expected output: "あえいおう"
Example 2:

Input: "AえイOう"
Output:"romaji"

Expected output: "AeiOu"*/

const romajiDictLow = 'aeiou';
const romajiDictUp = 'AEIOU';
const hiraDict = 'あえいおう';
const kataDict = 'アエイオウ';

function vowels(input, output) {
    if (!input) return '';

    return [...input]
        .map((char) => {
            if (output === 'romaji') {
                if (hiraDict.indexOf(char) !== -1) {
                    char = romajiDictLow[hiraDict.indexOf(char)];
                } else if (kataDict.indexOf(char) !== -1) {
                    char = romajiDictLow[kataDict.indexOf(char)];
                }
            } else if (output === 'hiragana') {
                if (romajiDictLow.indexOf(char) !== -1) {
                    char = hiraDict[romajiDictLow.indexOf(char)];
                } else if (romajiDictUp.indexOf(char) !== -1) {
                    char = hiraDict[romajiDictUp.indexOf(char)];
                } else if (kataDict.indexOf(char) !== -1) {
                    char = hiraDict[kataDict.indexOf(char)];
                }
            } else if (output === 'katakana') {
                if (romajiDictLow.indexOf(char) !== -1) {
                    char = kataDict[romajiDictLow.indexOf(char)];
                } else if (romajiDictUp.indexOf(char) !== -1) {
                    char = kataDict[romajiDictUp.indexOf(char)];
                } else if (hiraDict.indexOf(char) !== -1) {
                    char = kataDict[hiraDict.indexOf(char)];
                }
            }

            return char;
        })
        .join('');
}

console.log(vowels('AえイOう', 'romaji'));
console.log(vowels('ouaei', 'hiragana'));
console.log(vowels('aeiou', 'katakana'));
