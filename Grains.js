/*Write a program that calculates the number of grains of wheat on a specific square of chessboard given that 
the number on each square is double the previous one.

There are 64 squares on a chessboard.

#Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

Write a program that shows how many grains were on each square.*/

function square(number) {
    const squares = [1];

    for (let i = 1; i < number; i++) {
        if (i > 0) {
            squares.push(squares[i - 1] * 2);
        }
    }

    return squares[squares.length - 1];
}

console.log(square(32));
