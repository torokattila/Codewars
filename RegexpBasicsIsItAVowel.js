/*Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and 
false otherwise.*/

String.prototype.vowel = function () {
    const vowelPattern = /[aeiouAEIOU]/;
    return this.valueOf().length == 1 && vowelPattern.test(this.valueOf());
};

console.log("ou".vowel());