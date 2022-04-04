/*Give you a number n, return "Half" of n.

What does "Half" mean? In this kata, "Half" means:
Every number in the n only left half.

Some example to help you understand the rules:

halfIt(222)=111    (2 2 2 --> 2/2 2/2 2/2 --> 1 1 1)

If there is an odd number in n, half of it is a float number, 
we need "round" it to a integer.
halfIt(333)=222
(3 3 3 --> Math.round(3/2) Math.round(3/2) Math.round(3/2) --> 2 2 2)

halfIt(123)=112    
(1 2 3 --> Math.round(1/2) 2/2 Math.round(3/2) --> 1 1 2)

halfIt(0)=0

When n is negative, it should be able to work properly
halfIt(-222)=-111

It should be able to work properly with decimal too
halfIt(-2.22)=-1.11

If n is not a number, return 0
halfIt("?")=0
halfIt([])=0
halfIt(true)=0
halfIt({})=0
halfIt(null)=0
halfIt(undefined)=0*/

function halfIt(n) {
    if (typeof n !== 'number') return 0;
    const numberPattern = /[0-9]/;

    return Number(
        `${n}`
            .split('')
            .map((char) => {
                if (numberPattern.test(char)) {
                    char = Math.round(Number(char) / 2);
                }

                return char;
            })
            .join('')
    );
}

console.log(halfIt(123));
