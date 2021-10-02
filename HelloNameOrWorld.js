"use strict";
/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World!
if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ""       => "Hello, World!" # name is an empty String*/
exports.__esModule = true;
exports.hello = void 0;
function hello(name) {
    if (name === void 0) { name = ""; }
    if (!name || name === "")
        return "Hello, World!";
    return "Hello, " + name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().substring(1) + "!";
}
exports.hello = hello;
console.log(hello("aliCE"));
