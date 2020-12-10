/*You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Examples:

spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'*/

function spongeMeme(sentence) {
    sentence = sentence.toLowerCase().split('');

    for (let i = 0; i <= sentence.length - 1; i++) {
        if (i % 2 == 0) {
            sentence[i] = sentence[i].toUpperCase();
        }
    }

    return sentence.join('');
}

console.log(spongeMeme('stop Making spongebob Memes!'));