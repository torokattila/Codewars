/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  const nonHashes = [];

  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== '#') {
      nonHashes.push(s[i]);
    } else if (nonHashes.length !== 0) {
      nonHashes.pop();
    }
  }

  let res = '';

  while (nonHashes.length !== 0) {
    res += nonHashes.pop();
  }

  let result = '';

  for (let i = res.length - 1; i >= 0; i--) {
    result += res[i];
  }

  return result;
}

console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));
console.log(
  cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##')
);
