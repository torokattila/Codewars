String.prototype.isLetter = function () {
    const letterPattern = /[a-zA-Z]/;
    return this.valueOf().length == 1 && letterPattern.test(this.valueOf());
}

console.log("*".isLetter())