/*Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.*/

var Calculator = {
    average: function () {
        const args = Array.from(arguments);

        if (args.length == 0) {
            return 0;
        } else {
            const sum = args.reduce((accum, current) => accum + current);
            return args.length == 0 ? 0 : sum / args.length;
        }
    }
};

console.log(Calculator.average([3, 4, 5]));