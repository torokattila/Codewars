/*Description:
Given a string, you need to write a method that order every letter in this string in ascending order.

Also, you should validate that the given string is not empty or null. If so, the method should return:

"Invalid String!"
Notes
• the given string can be lowercase and uppercase.
• the string could include spaces or other special characters like '# ! or ,'
Examples
"hello world" => " dehllloorw"
"bobby"       => "bbboy"
""            => "Invalid String!"
"!Hi You!"    => " !!HYiou"*/

function orderWord(s) {
	if (s === "" || s === null) return "Invalid String!";

    return s.split('').sort((a, b) => {
        if (a > b) {
            return 1;
        }

        if (a < b) {
            return -1;
        }

        return 0 ;
    }).join('');
}

console.log(orderWord("!Hi You!"));