/*Remove HTML tags and return string without:
<tag> and </tag>
<tag/>
<tag />
html tags with attributes.
Don't trim space, tab etc.
You have to use regexp.

Tests are using function:
String.prototype.replace(your regexp, "")*/

var reg = /(<([^>]+)>)/gi;

console.log('<div>test</div>'.replace(reg, ''));
console.log("<a href='#'>go to <b>start</b> page</a>".replace(reg, ''));
console.log('aaabbb<i>sss</i>zzz<hr/>vvv<hr /><br/>'.replace(reg, ''));
console.log("<img src='home.jpg'/>foto description".replace(reg, ''));
