/*There are two lists of different length. The first one consists of keys, the second one consists of 
values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. 
If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, 
just ignore the rest of values.*/

function createDict(keys, values) {
    let dictionary = {};

    for (let i = 0; i < keys.length; i++) {
        if (values[i] != undefined) {
            dictionary[keys[i]] = values[i]; 
        } else {
            dictionary[keys[i]] = null;
        }
    }

    return dictionary;
}

const keys = ['a', 'b', 'c', 'd', 'e'];
const values = [1, 2, 0, false, ''];
console.log(createDict(keys, values));