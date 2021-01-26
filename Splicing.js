/*The object of this kata is to create a function called removeValue that removes all of a certain value from 
an array using .splice() and then returns the array.

Please note that Array.prototype.filter is also disabled.

If the array is empty or has no element to remove it should return false.

example:

    arr = [1, 2, 1, '1', 3]
    arr.removeValue(1); // returns [2, '1', 3]*/

Array.prototype.removeValue = function (thing) {
    let array = this.valueOf();

    if (array.length == 0 || !array.includes(thing)) {
        return false;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === thing) {
                array.splice(array.indexOf(thing), 1);
                i--;
            }
        }

        return array;
    }
}

const arr = [ 2, 2, 1, 2, 2, 3 ]
console.log(arr.removeValue(2));