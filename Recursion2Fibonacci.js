/*##2 - Fibonacci number

In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

f(n) = f(n-1) + f(n-2)

with seed values

f(1) = 1 and f(2) = 1

#Your task

You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.*/

const fibonacci = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
};

console.log(fibonacci(4));
