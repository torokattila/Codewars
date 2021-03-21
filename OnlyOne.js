/*Given any number of boolean flags function should return true if and only if one of them is true while 
others are false. If function is called without arguments it should return false.

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false */

function onlyOne() {
    const args = [...arguments];
    let counter = 0;

    args.forEach(argument => {
        if (argument == true) {
            counter++;
        }
    });

    return counter == 1;
}

console.log(onlyOne(true, false, false));