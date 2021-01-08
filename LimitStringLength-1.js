/*The function must return the truncated version of the given string up to the given limit followed 
by "..." if the result is shorter than the original. Return the same string if nothing was truncated.*/

function solution(string, limit) {
    return limit >= string.length ? string : `${string.substring(0, limit)}...`;
}

console.log(solution('Testing String', 8));