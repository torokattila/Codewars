/*You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.

Rules/Note:
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
The length of each line = (2n-1).
Range of n is (-∞,100]
Examples:
pattern(5):

    12345
   12345 
  12345  
 12345   
12345    
pattern(10):

         1234567890
        1234567890 
       1234567890  
      1234567890   
     1234567890    
    1234567890     
   1234567890      
  1234567890       
 1234567890        
1234567890         
pattern(15):

              123456789012345
             123456789012345 
            123456789012345  
           123456789012345   
          123456789012345    
         123456789012345     
        123456789012345      
       123456789012345       
      123456789012345        
     123456789012345         
    123456789012345          
   123456789012345           
  123456789012345            
 123456789012345             
123456789012345              
pattern(20):

                   12345678901234567890
                  12345678901234567890 
                 12345678901234567890  
                12345678901234567890   
               12345678901234567890    
              12345678901234567890     
             12345678901234567890      
            12345678901234567890       
           12345678901234567890        
          12345678901234567890         
         12345678901234567890          
        12345678901234567890           
       12345678901234567890            
      12345678901234567890             
     12345678901234567890              
    12345678901234567890               
   12345678901234567890                
  12345678901234567890                 
 12345678901234567890                  
12345678901234567890    
*/

function pattern(n) {
  if (n <= 0) return '';
  let repeatableString = '';
  let incrementNum = 0;
  
  for (let i = 0; i < n; i++) {
    incrementNum++;

    if (incrementNum > 9) incrementNum = 0;
    repeatableString += `${incrementNum}`;
  }

  let output = '';
  let leftPadding = n - 1;
  let rightPadding = 0;

  for (let i = 0; i < n; i++) {
    output += `${' '.repeat(leftPadding)}${repeatableString}${' '.repeat(
      rightPadding
    )}${i < n - 1 ? '\n' : ''}`;

    leftPadding--;
    rightPadding++;
  }

  return output;
}

console.log(pattern(3));
console.log(pattern(5));
console.log(pattern(8));
console.log(pattern(39));
