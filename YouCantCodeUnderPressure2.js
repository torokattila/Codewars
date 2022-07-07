/*Code as fast as you can!

You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, 
but the counter should not be directly accessible from outside the function.*/

function Counter() {
    this.counter = 0;
    this.check = function () {
        return this.counter;
    };
    this.increment = function () {
        this.counter++;
    };
}

const myCounter = new Counter();
myCounter.increment();
myCounter.increment();

console.log(myCounter.check());
