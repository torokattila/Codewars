function sumConsecutives(s) {
    let sumArray = [], sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            sum += s[i];
        } else if (s[i] !== s[i + 1]) {
            sumArray.push(sum + s[i]);
            sum = 0;
        }
    }

    return sumArray;
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));