/*Raj has got into a problem, he solved the triangle pattern but stuck in the codes of "inverse triangle". 
Help him with the codes and remember to get the output as per given in examples below.

Rules:
Take input as 'n' which is always a natural number
Space between each digit
No space after the rows end
Examples
pattern(5)

1 1 1 1 1
 2 2 2 2
  3 3 3
   4 4
    5
    
    
pattern(9)

  1 1 1 1 1 1 1 1 1
   2 2 2 2 2 2 2 2
    3 3 3 3 3 3 3
     4 4 4 4 4 4
      5 5 5 5 5
       6 6 6 6
        7 7 7
         8 8
          9
        
        
pattern(16)

1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
  3 3 3 3 3 3 3 3 3 3 3 3 3 3
   4 4 4 4 4 4 4 4 4 4 4 4 4
    5 5 5 5 5 5 5 5 5 5 5 5
     6 6 6 6 6 6 6 6 6 6 6
      7 7 7 7 7 7 7 7 7 7
       8 8 8 8 8 8 8 8 8
        9 9 9 9 9 9 9 9
         0 0 0 0 0 0 0
          1 1 1 1 1 1
           2 2 2 2 2
            3 3 3 3
             4 4 4
              5 5
               6
*/

function pattern(n) {
    let output = '';
    let patternNum = 1;
    let padding = 1;

    for (let i = n; i > 0; i--) {
        if (patternNum > 9) {
            patternNum = 0;
        }
        if (i === 1) {
            output += `${' '.repeat(padding)}${patternNum.toString().repeat(i)}`;
        } else {
            output += `${' '.repeat(padding)}${patternNum.toString().repeat(i).split('').join(' ')}\n`;
        }
        padding++;
        patternNum++;
    }

    return output;
}

console.log(pattern(5));
