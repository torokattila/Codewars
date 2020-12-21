/*Create a function, called compute, that accepts an integer argument, N, and returns the value of the following expression, where N is 
a odd positive integer given by the user

Expression : 1 +....+ 1/(N)^2

For example, when N = 9, compute() should evaluate the following: 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 == ~1.1838649533887629

Note: User input of an even number OR a number less than 3 should return 0.*/

function compute(n) {
  let result = 1;

  if (n % 2 == 0 || n < 3) {
      return 0;
  } else {
    for (let i = 3; i <= n; i+=2) {
        result += 1 / Math.pow(i, 2); 
    }
  }
  
  return result;
}

console.log(compute(1));
