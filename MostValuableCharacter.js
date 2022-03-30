/*In this Kata, you will be given a string and your task is to return the most valuable character. 
The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. 
Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. 
[For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'*/

function solve(st) {
    const values = {};

    st.split('').forEach((char) => {
        values[char] = st.lastIndexOf(char) - st.indexOf(char);
    });

    const sortedValues = Object.entries(values).sort((a, b) => {
        const aLetter = a[0];
        const bLetter = b[0];
        const aValue = a[1];
        const bValue = b[1];

        if (aValue === bValue) {
            if (aLetter < bLetter) return -1;
            if (aLetter > bLetter) return 1;
            return 0;
        } else {
            return bValue - aValue;
        }
    });

    return sortedValues.map((innerArr) => innerArr[0])[0];
}

console.log(solve('bcd'));
