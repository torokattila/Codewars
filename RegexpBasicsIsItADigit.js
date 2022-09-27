// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
  return this.length === 1 && /^\d+$/.test(this);
};

console.log(''.digit());
console.log('7'.digit());
console.log(' '.digit());
console.log('a'.digit());
console.log('a5'.digit());
console.log('14'.digit());