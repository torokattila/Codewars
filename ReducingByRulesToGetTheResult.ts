/*
Reducing by rules to get the result

Your task is to reduce a list of numbers to one number.
For this you get a list of rules, how you have to reduce the numbers.
You have to use these rules consecutively. So when you get to the end of the list of rules, you start again at the beginning.

An example is clearer than more words...

numbers: [ 2.0, 2.0, 3.0, 4.0 ]
rules: [ (a,b) => a + b, (a,b) => a - b ]
result: 5.0

You get a list of four numbers.
There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

The steps in progressing:
1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0
Both lists/arrays are never null and will always contain valid elements.
The list of numbers will always contain more than 1 numbers.
In the list of numbers will only be values greater than 0.
Every rule takes always two input parameter.
*/

type RuleFunction = (a: number, b: number) => number;

export function reduceByRules(
  numbers: number[],
  rules: RuleFunction[]
): number {
  return numbers.slice(1).reduce((acc, num, index) => {
    const rule = rules[index % rules.length];
    return rule(acc, num);
  }, numbers[0]);
}

console.log(reduceByRules([2.0, 2.0, 2.0], [(a, b) => a + b]));
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], [(a, b) => a + b]));
console.log(
  reduceByRules(
    [2.0, 2.0, 2.0],
    [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]
  )
);
