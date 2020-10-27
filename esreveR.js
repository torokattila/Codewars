/*Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)*/

reverse = function (array) {
    let reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i])
    }

    return reversedArray;
}

console.log(reverse([1, null, 14, "two"]));