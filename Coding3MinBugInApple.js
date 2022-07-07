/*Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]*/

function sc(apple) {
    let result = [];

    for (let i = 0; i < apple.length; i++) {
        for (let j = 0; j < apple[i].length; j++) {
            if (apple[i][j] === 'B') {
                result = [i, j];
                break;
            }
        }
    }

    return result;
}

const apple = [
    ['A', 'A', 'A', 'A', 'B', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
];
console.log(sc(apple));
