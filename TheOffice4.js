/*In this kata, you will be given an array. Each value represents a meeting room. Your job? 
Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).*/

function meeting(x) {
    return x.indexOf('O') == -1 ? 'None available!' : x.indexOf('O');
}

console.log(meeting(['X', 'X', 'X', 'X', 'X']));