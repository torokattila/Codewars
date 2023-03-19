/*
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.
*/

// let value = 0;

class Class {
  static value = 0;
  
  static getNumber() {
    if (this.value === 0) {
      this.value = 1;
      return this.value;
    } else {
      this.value = this.value * 2;

      return this.value;
    }
  }
}

console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());
