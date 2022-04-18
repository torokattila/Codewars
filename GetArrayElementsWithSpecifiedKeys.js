/*Create a function that lets people easily grab only the array elements with given keys.

For example:

var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']
Note: The order of the elements should be preserved in the resulting array.*/

Array.prototype.only = function (keys) {
    const elements = [...this];

    return elements.filter((item, index) => keys.includes(index));
};

const array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.only([0, 1, 3, 4]));
