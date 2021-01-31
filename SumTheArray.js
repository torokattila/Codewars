/*Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. 
You should return 0 if the array is empty.

For example:

var arr = [1,2,3,4];
arr.sum();  //returns 10*/

Array.prototype.sum = function() {
    return this.valueOf().length == 0 ? 0 : this.valueOf().reduce((accum, current) => accum + current);
}

var arr = [1, 2, 3, 4];
console.log(arr.sum());