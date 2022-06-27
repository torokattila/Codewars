/*No Story

No Description

Only by Thinking and Testing

Look at the result of testcase, guess the code!

Tests:
Test.assertEquals(testIt(0,1), 0)

//Yes, 1 * 2 = 2
Test.assertEquals(testIt(1,2), 2)

//I know, 5 * 6 = 30
Test.assertEquals(testIt(5,6), 30)

//What? 10 * 10 = 1 ?
Test.assertEquals(testIt(10,10), 1)

//Damn.. 200 * 200 = 4, 0 was omitted ?
Test.assertEquals(testIt(200,200), 4)

//Discover the mysteries of it ;-)
Test.assertEquals(testIt(12,34), 21)

//You can solve it
Test.assertEquals(testIt(123,45),54)
*/

function testIt(a, b) {
    const firstNumDigitsSum = [...`${a}`]
        .map((num) => Number(num))
        .reduce((accum, current) => accum + current);
    const secondNumDigitsSum = [...`${b}`]
        .map((num) => Number(num))
        .reduce((accum, current) => accum + current);

    return firstNumDigitsSum * secondNumDigitsSum;
}

console.log(testIt(123, 45));
