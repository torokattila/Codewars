/*
Learning TypeScript. Advanced Types. Union Types

Task
Let’s have a look at some properties of TypeScript union types:

Identity: A|A is equivalent to A
Commutativity: A|B is equivalent to B|A
Associativity: (A|B)|C is equivalent to A|(B|C)
Subtype collapsing: A|B is equivalent to A if B is a subtype of A
I.e. if we have a value that has a union type, we can only access members that are common to all types in the union. 
If a value has the type A | B, we only know for certain that it has members that both A and B have.

Your task is to create function join(tokens: string | string[], glue?: string): string which can accept both string and 
string[] and return one string in which tokens are concatenated with the glue.

Hint: Use typeof before calling join method.
*/

export function join(tokens: string | string[], glue?: string): string {
  return typeof tokens === 'string' ? tokens : tokens.join(glue);
}

console.log(join(['Hello', 'world!'], ', '));
