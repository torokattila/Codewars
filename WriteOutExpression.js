/*Math hasn't always been your best subject, and these programming symbols always trip you up!

I mean, does ** mean *"Times, Times"* or *"To the power of"*?

Luckily, you can create a function to write out the expressions for you!

The operators you'll need to use are:

{ '+':   'Plus ',
  '-':   'Minus ',
  '*':   'Times ',
  '/':   'Divided By ',  
  '**':  'To The Power Of ',
  '=':   'Equals ',
  '!=':  'Does Not Equal ' }
These values will be stored in the preloaded dictionary OPERATORS just as shown above.

But keep in mind: INVALID operators will also be tested, to which you should return "That's not an operator!"

And all of the numbers will be 1 to10! Isn't that nice!

Here's a few examples to clarify:

expressionOut("4 ** 9") === "Four To The Power Of Nine"
expressionOut("10 - 5") === "Ten Minus Five"
expressionOut("2 = 2")  === "Two Equals Two"*/

function allUndefined(value) {
    return value === undefined;
}

function expressionOut(expr) {
    const operators = {
        '+': 'Plus',
        '-': 'Minus',
        '*': 'Times',
        '/': 'Divided By',
        '**': 'To The Power Of',
        '=': 'Equals',
        '!=': 'Does Not Equal'
    }
    const numbers = {
        '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine', '10': 'Ten'
    };
    const characters = expr.split(' ');

    characters.forEach(character => {
        if (numbers[character]) {
            expr = expr.replace(character, numbers[character]);
        }
    });

    let operatorsCharacterArray = [];

    characters.forEach(character => {
        operatorsCharacterArray.push(operators[character]);
    });

    if (operatorsCharacterArray.every(allUndefined)) {
        expr = 'That\'s not an operator!';
    } else {
        characters.forEach(character => {
            expr = expr.replace(character, operators[character]);
        });
    }

    return expr;
}

console.log(expressionOut('2 = 2'));