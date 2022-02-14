/*In numerology, every number has a certain meaning that expresses someones connection to the universe! 
This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date.

Task
Calculate the single integer digit by adding up every digit in the birthdate: month, date, full year, 
from left to right (MMDDYYYY). If the sum exceeds 10, add up the two digits of the sum.

You will be passed in a javascript Date object, not a string.

For example, with Date('06/14/2010') => 06142010

sum	digits left	action
0	06142010	0+0
0	6142010	0+6
6	142010	6+1
7	42010	7+4
11	2010	1+1 (sum is greater than 10)
2	2010	2+2
4	010	4+0
4	10	4+1
5	0	5+0
5	done	
So, what is your number?*/

function solution(date) {
    let sum = 0;
    const parsedDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    )
        .toISOString()
        .split('T')[0]
        .split('-');
    const resultDateChars =
        `${parsedDate[1]}${parsedDate[2]}${parsedDate[0]}`.split('');

    resultDateChars.forEach((char) => {
        sum += Number(char);

        if (sum >= 10) {
            sum = `${sum}`
                .split('')
                .reduce((accum, current) => Number(accum) + Number(current));
        }
    });

    return sum;
}

console.log(solution(new Date('02/04/2010')));
