/*No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

Example test cases:
Test.assertSimilar(testit([0],[1]), [0,1], "")
Test.assertSimilar(testit([1,2],[3,4]), [1,2,3,4], "")
Test.assertSimilar(testit([1],[2,3,4]), [1,2,3,4], "")
Test.assertSimilar(testit([1,2,3],[4]), [1,2,3,4], "")
Test.assertSimilar(testit([1,2],[1,2]), [1,1,2,2], "")*/

function testit(a, b) {
	const aSet = [...new Set(a)];
	const bSet = [...new Set(b)];

	return aSet.concat(bSet).sort((a, b) => a - b);
}

const a = [1, 8, 4, 10, 7, 9, 7];
const b = [1, 8, 6, 6, 3, 3, 4, 10, 10, 4];
console.log(testit(a, b));
