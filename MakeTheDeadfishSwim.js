/*Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]*/

function parse(data) {
    const validCharacters = /[idso]/;
    let value = 0;
    const resultArray = [];

    for (let i = 0; i < data.length; i++) {
        const char = data[i];

        if (!validCharacters.test(char)) {
            continue;
        } else {
            if (char === "i") {
                value++;
            } else if (char === "d") {
                value--;
            } else if (char === "s") {
                value = Math.pow(value, 2);
            } else if (char === "o") {
                resultArray.push(value);
            }
        }
    }

    return resultArray;
}

console.log(parse("iiisxxxdoso"));
