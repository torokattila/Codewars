/*We need a HTML menu.... but writing HTML over and-over-again is boooring... Let's just generate it instead!

Task:
Write a function generateMenu() with the following inputs/output:

Inputs:

menuItems: An array of objects (with url and text properties), which represents our menu items

Output:

A string of HTML containing an anchor tag for each element of menuItems (with the appropriate href attribute and text content)
*/

function generateMenu(menuItems) {
  const result = [];

  menuItems.forEach((item) => {
    result.push(`<a href="${item.url}">${item.text}</a>`);
  });

  return result.join('');
}

console.log(
  generateMenu([
    { url: '#q', text: 'query' },
    { url: '#a', text: 'ans' },
  ])
);
