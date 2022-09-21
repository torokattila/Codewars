/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

Example
For startTag = "<button type='button' disabled>", the output should be "</button>";

For startTag = "<i>", the output should be "</i>".

Input/Output
[input] string startTag/start_tag

[output] a string
*/

function htmlEndTagByStartTag(startTag) {
  const foundTag = startTag
    .substring(startTag.indexOf('<') + 1, startTag.indexOf('>'))
    .split(' ')[0];

  return `</${foundTag}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
console.log(
  htmlEndTagByStartTag(
    "<div id='my_area' class='data' title='This is a test for title on Div tag'>"
  )
);
