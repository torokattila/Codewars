/*You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. 
Create a single string with the characters and return it as a[1] while maintaining 
the original order.*/

function mean(lst) {
    let numbersCounter = 0;
    let mean = 0;
    let concatenate = '';

    lst.forEach(item => {
        if (!isNaN(parseInt(item))) {
            mean += parseInt(item);
            numbersCounter++;
        } else {
            concatenate += item;
        }
    });

    return [parseFloat(mean / numbersCounter), concatenate];
}

console.log(mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']))