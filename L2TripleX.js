/*Given a string, return true if the first instance of "x" in the string is immediately followed by the 
string "xx".
capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false*/

function tripleX(str) {
    if (!str.includes('x')) {
        return false;
    } else {
        const indexOfFirtstX = str.indexOf('x');
        let result = false;

        for (let i = 0; i < str.length; i++) {
            if (i == indexOfFirtstX && i + 1 == indexOfFirtstX + 1 && str[i + 1] == 'x' && i + 2 == indexOfFirtstX + 2 && str[i + 2] == 'x') {
                result = true;
            }
        }

        return result;
    }
}

console.log(tripleX('xoxotrololololololoxxx'));