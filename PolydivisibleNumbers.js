function polydivisible(x) {
    let xCharactersBuilder = '';
    x = x.toString().split('');
    let result = true;

    for (let i = 0; i < x.length; i++) {
        xCharactersBuilder += x[i];
        if (parseInt(xCharactersBuilder) % (i + 1) != 0) {
            result = false;
        }
    }

    return result;
}

console.log(polydivisible(123220));