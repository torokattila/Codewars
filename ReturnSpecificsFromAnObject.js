/*Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e']*/

function returnSpecifics(obj) {
    if (Object.keys(obj).length === 0) return ['The Object is Empty'];
    const result = {
        numbers: [],
        functions: [],
    };

    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            result.numbers.push(obj[key]);
        } else if (typeof obj[key] === 'function') {
            result.functions.push(key);
        }
    }

    return [].concat(...Object.values(result));
}

console.log(
    returnSpecifics({
        a: 1,
        b: 2,
        c: 3,
        d: 'd',
        e: 'dsds',
        add: function (a, b) {
            return a + b;
        },
        g: 34,
    })
);
