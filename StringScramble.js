function scramble(str, arr) {
  let resultStringArray = [];
  str = str.split("");

  for (let i = 0; i <= arr.length; i++) {
    resultStringArray[arr[i]] = str[i];
  }

  return resultStringArray.join("");
}

console.log(scramble("bskl5", [2, 1, 4, 3, 0]));
