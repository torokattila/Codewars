/*First, You will write a very basic compression algorithm

It gets a string:
string="aaaaaaaabaaaa"
And generates an array that sums all the repeating characters like so:
compressed=[[8,"a"],[1,"b"],[4,"a"]]
The compressed version is turned into a string:
compressed='[[8,"a"],[1,"b"],[4,"a"]]'

Finally,
If the compressed version is shorter than the original string, the function will return the compressed version.
Otherwise it will return the original string.

Example1:
string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
output1='[[26,"a"],[1,"b"],[18,"a"]]'

Example2:
string2="abcde"
output2="abcde"

After you created the compression algorithm, create a decompression algorithm:

It gets a string (output1, output2, etc.).
If the string is comrpessed, it returns the uncompressed version,
If it is uncompressed, it returns the original string unchanged.

//output1='[[26,"a"],[1,"b"],[18,"a"]]'
uncompress(output1)
//returns
"aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"

//output2="abcde"
uncompress(output2)
//returns
"abcde"*/

var compress = function(str) {
    const compressedArray = [];
    let counter = 1;

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const nextChar = str[i + 1];

        if (nextChar === currentChar) {
            counter++;
        } else {
            compressedArray.push([counter, currentChar]);
            counter = 1;
        }
    }

    return JSON.stringify(compressedArray).length < str.length ? JSON.stringify(compressedArray) : str;
};

var decompress = function(c) {
    if (!c.includes("[[") && !c.includes("]]")) return c;

    const decompressedArray = JSON.parse(c);
    let decompressedString = "";

    for (let i = 0; i < decompressedArray.length; i++) {
        for (let j = 0; j < decompressedArray[i][0]; j++) {
            decompressedString += decompressedArray[i][1];
        }
    }

    return decompressedString;
};

console.log(compress("aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"));
console.log(decompress('[[26,"a"],[1,"b"],[18,"a"]]'));