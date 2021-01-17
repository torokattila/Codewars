/*Some of the test cases:
Test.assertSimilar(testit(""), "", "")
Test.assertSimilar(testit("a"), "A", "")
Test.assertSimilar(testit("b"), "B", "")
Test.assertSimilar(testit("a a"), "A A", "")
Test.assertSimilar(testit("a b"), "A B", "")
Test.assertSimilar(testit("a b c"), "A B C", "")
*/

function testit(s) {
    let sWords = s.split(' ')

    return sWords.map(word => {
        return word.slice(0, -1) + word.slice(-1).toUpperCase();
    }).join(' ');
}

console.log(testit("dkp xvgh lhy"));