/*No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

Example test cases:
Test.assertSimilar(testit(["run","jump","run","jump","run"],"_|_|_"),"_|_|_", "")
Test.assertSimilar(testit(["run","jump","run","run","run"],"_|_|_"),"_|_/_", "")
Test.assertSimilar(testit(["run","run","run","run","run"],"_|_|_"),"_/_/_", "")
Test.assertSimilar(testit(["jump","jump","jump","jump","jump"],"_|_|_"),"x|x|x", "")
Test.assertSimilar(testit(["jump","run","jump","run","jump"],"_|_|_"),"x/x/x", "")*/

function testit(act, s) {
	let resultString = '';
	const sChars = s.split('');

	for (let i = 0; i < act.length; i++) {
		if (act[i] === 'run' && sChars[i] === '_') {
			resultString += '_';
		}

		if (act[i] === 'jump' && sChars[i] === '|') {
			resultString += '|';
		}

		if (sChars[i] === '_' && act[i] !== 'run') {
			resultString += 'x';
		}

		if (sChars[i] === '|' && act[i] !== 'jump') {
			resultString += '/';
		}
	}

	return resultString;
}

console.log(testit(['run', 'run', 'run', 'run', 'run'], '_|_|_'));
