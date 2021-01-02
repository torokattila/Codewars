/*Write function toAcronym which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether*/

function toAcronym(inp) {
    return inp.split(' ').map(word => {
        word = word.charAt(0).toUpperCase();
        return word;
    }).join('');
}

console.log(toAcronym("hyper text markup language"));