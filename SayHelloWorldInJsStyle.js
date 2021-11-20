/*Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"*/

function say(string1) {
	return function(nextString) {
		return string1 + ' ' + nextString;
	};
}

console.log(say("Hello")("World"));
