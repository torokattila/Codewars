/*In this easy kata your function has to take a string as input and return a string with everything 
removed (whitespaces included) but the digits. As you may have guessed empty strings are to be returned as 
they are & if the input string contains no digits then the output will be an empty string.By the way , 
you have to watch out for non-string inputs too.Return 'Invalid input !' for them.*/

function digitAll(x) {
    if (typeof x != "string") {
        return 'Invalid input !';
    } else {
        return x.replace(/[^0-9]+/g, "");
    }
}