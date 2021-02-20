/*Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of 
numbers, sometimes it can pollute our code.

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make 
this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array 
ordered ascendingly or descendingly respectively. If no dir parameter is set it should assume 'asc' by default. 
If it has an invalid value, return false.

For the effects of this Kata, all the arrays will contain only Integer numbers so you don't have to care about 
validating them.*/

Array.prototype.sortReloaded = function () {
    if (arguments.length > 0 && arguments[0].toLowerCase() != 'asc' && arguments[0].toLowerCase() != 'desc') {
        return false;
    } else {
        if (arguments.length == 0 || arguments[0].toLowerCase() == 'asc') {
            let arrayCopy = [...this];
            let resultArray = [];

            for (let i = 0; i < arrayCopy.length; i++) {
                for (let j = i + 1; j < arrayCopy.length; j++) {
                    if (arrayCopy[i] > arrayCopy[j]) {
                        let temp = arrayCopy[i];
                        arrayCopy[i] = arrayCopy[j];
                        arrayCopy[j] = temp;
                    }
                }

                resultArray.push(arrayCopy[i]);
            }

            return resultArray;
        } else if (arguments[0].toLowerCase() == 'desc') {
            let arrayCopy = [...this];
            let resultArray = [];
            
            for (let i = 0; i < arrayCopy.length; i++) {
                for (let j = i + 1; j < arrayCopy.length; j++) {
                    if (arrayCopy[i] < arrayCopy[j]) {
                        let temp = arrayCopy[i];
                        arrayCopy[i] = arrayCopy[j];
                        arrayCopy[j] = temp;
                    }
                }

                resultArray.push(arrayCopy[i]);
            }

            return resultArray;
        }
    }
}

console.log([ 2, 3, 4, 3, 2, 9, 1 ].sortReloaded('desc'));