/*
Input: Integer n
Output: String
Example:

a(4) prints as

   A   
  A A  
 A A A 
A     A
a(8) prints as

       A       
      A A      
     A   A     
    A     A    
   A A A A A   
  A         A  
 A           A 
A             A
a(12) prints as

           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
Note:

Each line's length is 2n - 1
Each line should be concatenate by line break "\n"
If n is less than 4, it should return ""
If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)
*/

function a(n) {
  if (n < 4) return '';
  if (n % 2 !== 0) n = n - 1;
  let result = '';
  let sidePadding = n - 1;
  let innerPadding = -1;
  const halfWay = Math.floor(n / 2) + 1;

  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      result += `${' '.repeat(sidePadding)}A${' '.repeat(sidePadding)}\n`;
    } else if (i === halfWay) {
      result += `${' '.repeat(sidePadding)}${'A '
        .repeat(halfWay)
        .trim()}${' '.repeat(sidePadding)}\n`;
    } else if (i === n) {
      result += `A${' '.repeat(innerPadding)}A`;
    } else {
      result += `${' '.repeat(sidePadding)}A${' '.repeat(
        innerPadding
      )}A${' '.repeat(sidePadding)}\n`;
    }

    sidePadding--;
    innerPadding += 2;
  }

  return result;
}

console.log(a(4));
console.log(a(8));
console.log(a(7));
