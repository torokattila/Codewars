/*Given: a sequence of different type of values (number, string, boolean). You should return an object with a 
separate properties for each of types presented in input. Each property should contain an array of 
corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}*/

function filterEmptyArrays(object) {
    let result = {};

    for (const [key, value] of Object.entries(object)) {
        if (value.length != 0) {
            result[key] = value;
        }
    }

    return result;
}
    
function separateTypes(input) {
    let resultObject = {
        number: [],
        string: [],
        boolean: []
    };

    input.forEach(item => {
        if (typeof item == 'number') {
            resultObject.number.push(item);
        } else if (typeof item == 'string') {
            resultObject.string.push(item);
        } else if (typeof item == 'boolean') {
            resultObject.boolean.push(item);
        }
    });

    return filterEmptyArrays(resultObject);
}

console.log(separateTypes([ 'a', 1, 2 ]));