/*A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

Making a digital chessboard I think is an interesting way of visualising how loops can work together.

Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

So chessBoard(6,4) should return an array like this:

[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]
And chessBoard(3,7) should return this:

[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
The white spaces should be represented by an: 'O'

and the black an: 'X'

The first row should always start with a white space 'O'*/

function chessBoard(rows, columns) {
    let chessBoardArray = [];

    for (let i = 0; i < rows; i++) {
        chessBoardArray.push([]);
        for (let j = 0; j < columns; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                chessBoardArray[i][j] = 'O';
            } else {
                chessBoardArray[i][j] = 'X';
            }
        }
    }

    for (let i = 0; i < chessBoardArray.length; i++) {
        if (i % 2 != 0) {
            for (let j = 0; j < chessBoardArray[i].length; j++) {
                if (j % 2 != 0) {
                    chessBoardArray[i][j] = 'O';
                }
            }
        }
    }

    return chessBoardArray;
}

console.log(chessBoard(6, 4))