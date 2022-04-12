/*Decode the strings.

In Javascript each character has its own unique unicode number, for example:
a = 97
A = 65
1 = 49

Your function accepts unicode numbers, you need to create a function that decodes these numbers and returns the correct string.

If the input includes elements that are not numbers your code needs to ingnore those elements and move onto the next value.

If the input includes no valid numbers your function should return "not a valid character code".*/

function uniDecoder() {
    const args = [...arguments];
    if (args.length === 0) return '';
    if (args.length === 1 && typeof args[0] !== 'number')
        return 'not a valid character code';

    return args
        .map((num) => {
            if (typeof num !== 'number') {
                num = '';
            } else {
                num = String.fromCharCode(num);
            }

            return num;
        })
        .join('');
}

console.log(
    uniDecoder(
        'not a code',
        84,
        104,
        105,
        115,
        32,
        116,
        101,
        'not a code',
        115,
        116,
        32,
        116,
        111,
        111
    )
);
