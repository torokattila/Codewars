/*You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". 
Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count of them though, 
as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"*/

function bald(x) {
    let removedHairsCounter = 0;
    let copiedX = x;
    let resultString = '';
    
    copiedX.split('').forEach(hair => {
        if (hair == '/') {
            removedHairsCounter++;
        }
    });

    x = x.replace(/[\/]/g, '-');
    if (removedHairsCounter == 0) {
        resultString += 'Clean!';
    } else if (removedHairsCounter == 1) {
        resultString += 'Unicorn!'
    } else if (removedHairsCounter == 2) {
        resultString += 'Homer!';
    } else if (removedHairsCounter >= 3 && removedHairsCounter <= 5) {
        resultString += 'Careless!';
    } else if (removedHairsCounter > 5) {
        resultString += 'Hobo!';
    }

    return [x, resultString];
}

console.log(bald('--/--/---/-/---'));