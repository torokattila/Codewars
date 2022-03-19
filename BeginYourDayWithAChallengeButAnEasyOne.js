/*There are no explanations. You have to create the code that gives the following results in Python and Ruby:

one_two_three(0) == [0, 0]
one_two_three(1) == [1, 1]
one_two_three(2) == [2, 11]
one_two_three(3) == [3, 111]
one_two_three(19) == [991, 1111111111111111111]
And it should give the following results in Javascript:

oneTwoThree(0) == ['0', '0']
oneTwoThree(1) == ['1', '1']
oneTwoThree(3) == ['3', '111']
oneTwoThree(19) == ['991', '1111111111111111111']*/

function oneTwoThree(n) {
    if (n === 0) return ['0', '0'];
    let firstResult = '';
    let secondResult = '1'.repeat(n);
    let remainder = n % 9;
    firstResult =
        remainder > 0 ? '9'.repeat(n / 9) + remainder : '9'.repeat(n / 9);

    return [firstResult, secondResult];
}

console.log(oneTwoThree(128));
