/*"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: 
words and returns a spoonerism of those words in a string, as in the above example.*/

function spoonerize(words) {
    words = words.split(' ');
    let firstWordFirstChar = words[0].charAt(0);
    let secondWordFirstChar = words[1].charAt(0);

    return secondWordFirstChar + words[0].substring(1) + ' ' + firstWordFirstChar + words[1].substring(1); 
}

console.log(spoonerize("nit picking"));