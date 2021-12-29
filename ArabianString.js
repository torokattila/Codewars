/*You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"*/

function camelize(str) {
	const words = str.split(/[^a-zA-Z0-9]/);

	return words
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join('');
}

console.log(camelize('yyEPU1T9U3dM1agA:w/SA8ktBv w8GVzlrXT7fgM'));
