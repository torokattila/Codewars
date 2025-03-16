/*
Learning TypeScript. Advanced Types. Intersection Types

Task
In the example above you can see that extends function returns T & U which should correspond to 
intersection of types T and U. But in fact it returns object containing all properties from T mixed with additional properties from U.
Your task is to create function intersect which returns object with properties that are present simultaneously in T and U.
*/

export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U
): Partial<T & U> {
  let result: Partial<T & U> = {};

  for (let key in first) {
    if (key in second) {
      (result as any)[key] = first[key];
    }
  }

  return result;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 10, c: 20, d: 30 };

const common = intersect(obj1, obj2);
console.log(common);
