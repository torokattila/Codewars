/*Remove all exclamation marks from sentence except at the end.*/

function remove(s) {
    s = s.split(' ');

    if (s.length == 1 && s[0].startsWith('!')) {
        return s[0].substring(1);
    } else {
        for (let i = 0; i < s.length; i++) {
            if (i == s.length - 1) {
                continue;
            } else if (i != s.length - 1) {
                s[i] = s[i].replace(/[!]/g, '');
            }
        }
        return s.join(' ');
    }
}

console.log(remove("ynb!! svafthh fdspzx"));