/*Jumping number is the number that All adjacent digits in it differ by 1.
Given a number, Find if it is Jumping or not .*/

function jumpingNumber(n) {
    n = n.toString().split('');
    let isJumping = true;
    let tempArray = [];

    if (n.length == 1) {
        isJumping = true;
    } else {
        for (let i = 0; i < n.length - 1; i++) {
            tempArray.push(Math.abs(parseInt(n[i]) - parseInt(n[i + 1])))
        }

        tempArray.forEach(number => {
            if (number > 1 || number == 0) {
                isJumping = false;
            }
        });
    }

    return isJumping ? 'Jumping!!' : 'Not!!';
}

console.log(jumpingNumber(667));