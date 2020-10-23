/*Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character 
of the final pair with an underscore ('_').*/

function solution(str) {
    if (str.length == 0) {
        return [];
    }
  
    let devidedArray = str.match(/.{1,2}/g);

    return devidedArray.map(item => {
        return item.length == 1 ? item + '_' : item;
    });
}

console.log(solution('abc'));