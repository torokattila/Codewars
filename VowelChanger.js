function vowelChange(str, vow) {
    return str.replace(/[aAeEiIoOuU]/ig, vow);
}

console.log(vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!", 'i'))
