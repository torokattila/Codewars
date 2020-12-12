/*Your friend Nhoj has dislexia, but can easily read messages if the words are written backwards.
Create a function called reverseSentence()/reverse_sentence() that accepts a string argument. 
The function returns a string of the same length with each word reversed, but still in their original order.

reverseSentence("Hello !Nhoj Want to have lunch?"); // => 'olleH johN! tnaW ot evah ?hcnul'*/

function reverseSentence(str) {
    str = str.split(' ');

    return str.map(word => {
        word = word.split('').reverse().join('');
        return word;
    }).join(' ');
}

console.log(reverseSentence("Hello !Nhoj Want to have lunch?"))