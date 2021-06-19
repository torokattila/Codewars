/*Create a function that takes 2 arrays of 5 string numbers each, and outputs the sum of the corresponding elements as strings as well.

  sumArr(['4','5','6','7','8'],['1','2','3','4','5']) // => ['5','7','9','11','13']
  sumArr(['34','5','200','17','6'],['27','24','14','90','16']) // => ['61','29','214','107','22']
If any input is an empty string, it should return the number that isn't just an empty string. 
If both corresponding elements are empty, output "0".

*/

function sumArr(a, b) {
    const resultArray = [];

    a.forEach((aItem, index) => {
        if (aItem === '' && b[index] !== '') {
            resultArray.push(b[index]);
        } else if (aItem !== '' && b[index] === '') {
            resultArray.push(aItem);
        } else {
            resultArray.push((Number(aItem) + Number(b[index])).toString());
        }
    });

    return resultArray;
}

console.log(sumArr(['34','5','200','17','6'],['27','24','14','90','16']));
