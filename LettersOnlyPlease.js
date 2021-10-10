/*Write a function that takes a string and returns a string without the unnecessary characters.

Examples
removeChars('.tree1')    ==> 'tree'

removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)*/

function removeChars(s) {
    return s.replace(/[^a-zA-Z ]/g, '');
}

console.log(removeChars('1 + 1 = 2'));