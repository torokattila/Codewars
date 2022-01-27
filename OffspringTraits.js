/*A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 
'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'*/

const bearFur = (bears) => {
    const allowed = ['brown', 'white', 'black'];
    if (
        (allowed.includes(bears[0]) && !allowed.includes(bears[1])) ||
        (!allowed.includes(bears[0]) && allowed.includes(bears[1])) ||
        (!allowed.includes(bears[0]) && !allowed.includes(bears[1]))
    ) {
        return 'unknown';
    }
    if (bears[0] === 'black' && bears[1] === 'black') return 'black';
    if (bears[0] === 'white' && bears[1] === 'white') return 'white';
    if (bears[0] === 'brown' && bears[1] === 'brown') return 'brown';
    if (
        (bears[0] === 'white' && bears[1] === 'black') ||
        (bears[0] === 'black' && bears[1] === 'white')
    ) {
        return 'grey';
    }

    if (bears[0] === 'white') return `light ${bears[1]}`;
    if (bears[0] === 'black') return `dark ${bears[1]}`;
    if (bears[1] === 'white') return `light ${bears[0]}`;
    if (bears[1] === 'black') return `dark ${bears[0]}`;
};

console.log(bearFur(['black', 'brown']));
