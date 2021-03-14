/*You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.*/

function expandedForm(num) {
    let expandedArray = [];
    const reversedNum = num.toString().split('').reverse().join('');

    for (let i = 0; i < reversedNum.length; i++) {
        const character = reversedNum[i];

        if (character != '0') {
            expandedArray.push(character + '0'.repeat(i));
        }
    }

    return expandedArray.reverse().join(' + ');
}

console.log(expandedForm(42));