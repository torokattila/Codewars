/*Sometimes we need information about the list/arrays we're dealing with. You'll have to write such a function in this kata. Your 
function must provide the following informations:

Length of the array
Number of integer items in the array
Number of float items in the array
Number of string character items in the array
Number of whitespace items in the array
The informations will be supplied in arrays that are items of another array. Like below:

Output array = [[array length],[no of integer items],[no of float items],[no of string chars items],[no of whitespace items]]

Added Difficulty
If any item count in the array is zero, you'll have to replace it with a None/nil/null value (according to the language). And of course, if the array is empty then return 'Nothing in the array!. For the sake of simplicity, let's just suppose that there are no nested structures.
Output ====== If you're head is spinning (just kidding!) then these examples will help you out-*/

function arrayInfo(arr) {
  let lengthOfArray = arr.length;
  let numberOfIntegers = 0;
  let numberOfFloats = 0;
  let numberOfStrings = 0;
  let numberOfWhiteSpaces = 0;

  if (arr.length == 0) {
    return "Nothing in the array!";
  } else {
    arr.forEach((item) => {
      if (Number.isInteger(item)) {
        numberOfIntegers++;
      } else if (parseFloat(item) == item) {
        numberOfFloats++;
      } else if (item == " ") {
        numberOfWhiteSpaces++;
      } else if (typeof item == "string") {
        numberOfStrings++;
      }
    });

    return [
      [lengthOfArray],
      [numberOfIntegers == 0 ? null : numberOfIntegers],
      [numberOfFloats == 0 ? null : numberOfFloats],
      [numberOfStrings == 0 ? null : numberOfStrings],
      [numberOfWhiteSpaces == 0 ? null : numberOfWhiteSpaces],
    ];
  }
}

console.log(arrayInfo([1, 2, 3.33, 4, 5.01, "bass", "kick", " "]));
