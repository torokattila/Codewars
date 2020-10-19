function manipulate(num) {
    num = num.toString().split('');

    if (num.length % 2 == 0) {
        for (let i = 0; i < num.length; i++) {
            if (i >= num.length / 2) {
                num[i] = '0'
            }
        }
    } else {
        for (let i = 0; i < num.length; i++) {
            if (i >= (num.length / 2) - 1) {
                num[i] = '0'
            }
        }
    }


    return parseInt(num.join(''));
}

console.log(manipulate(283749202));