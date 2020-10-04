String.prototype.toJadenCase = function () {
    let str = '';
    let words = this.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (i != words.length - 1) {
            words[i] = (words[i].substring(0, 1)).toUpperCase() + words[i].substring(1) + ' ';
        } else {
            words[i] = (words[i].substring(0, 1)).toUpperCase() + words[i].substring(1);
        }

        str += words[i];
    }

    return str;
};

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());