function initials(n){
    n = n.split(' ');
    let resultString = '';

    for (let i = 0; i < n.length; i++) {
        if (n[i] != n[n.length - 1]) {
            n[i] = n[i].substring(0, 1).toUpperCase() + '.';
        } else {
            n[i] = n[i].substring(0, 1).toUpperCase() + n[i].substring(1);
        }

        resultString += n[i];
    }

    return resultString;
}

console.log(initials('Barack Hussain obama'));