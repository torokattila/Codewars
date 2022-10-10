/*
Your friend has recently started using Codewars to learn more advanced coding. 
They have just created their first kata, and they want to write a proper description for it, 
using codeblocks, images and hyperlinks.

However, they are struggling to understand how to use Markdown formatting properly, 
so they decide to ask for your help, by having you write a program that will generate some of the syntaxes for you.

Markdown syntaxes
links: [displayed text](url address)
images: ![replacement message](url address)
codeblocks: we'll use multiline codeblocks like the following
```language
code
```
Task
Your task is to create a function called generate_markdowns or generateMarkdowns. It will take three parameters:

markdown - The type of markdown to return. It can be "link", "img" or "code".
text - The text,message or code to display
url_or_language or urlOrLanguage - gives either the url address to use or the name of the language for the codeblock.
Examples
generate_markdowns('link','Github Codewars','https://github.com/codewars')
# returns: "[Github Codewars](https://github.com/codewars)"
When used in the description: Github Codewars

generate_markdowns('img','this should be a picture','https://github.com/codewars/gna.jpg')
# returns: "![this should be a picture](https://github.com/codewars/gna.jpg)"
When used in the description (no image, sorry... ;o ):this should be a picture

code = '''\
def generate_markdowns(markdown, text, url_or_language):
    # Your code here!
    pass'''
generate_markdowns('code', code, 'python')
# returns: "```python\ndef generate_markdowns(markdown, text, url_or_language):\n    # Your code here!\n    pass\n```"
When used in the description:

def generate_markdowns(markdown, text, url_or_language):
    # Your code here!
    pass
*/

function createLink(text, url) {
  return `[${text}](${url})`;
}

function createImage(text, url) {
  return `![${text}](${url})`;
}

function createCode(code, language) {
  return `\`\`\`${language}\n${code}\n\`\`\``;
}

function generateMarkdowns(markdown, text, urlOrLanguage) {
  const pairs = {
    link: createLink(text, urlOrLanguage),
    img: createImage(text, urlOrLanguage),
    code: createCode(text, urlOrLanguage),
  };

  return pairs[markdown];
}

console.log(
  generateMarkdowns(
    'link',
    'hyperlink',
    'https://en.wikipedia.org/wiki/Hyperlink'
  )
);
console.log(
  generateMarkdowns(
    'img',
    'this should be an image',
    'https://github.com/codewars/gna.jpg'
  )
);
const code =
  'function generateMarkdowns(markdown,text,urlOrLanguage) {\n// write your code here\n};';
console.log(generateMarkdowns('code', code, 'javascript'));
