"use strict";

console.time("Time this");
var myBoard = [5, 7, [4, [2], 8, [1, 3, [10, 10]], 2],
    [9, []],
    1, 8
];
var s = 0;
var sum = 0;

sum = showBoard(myBoard);
console.log('Сумма: ' + sum);

function showBoard(board) {
    for (var row = 0; row < board.length; row++) {
        if (typeof(board[row]) === "number") {
            console.log(board[row]);
            sum = sum + board[row];
            console.log('sum=' + sum);
        } else {
            showBoard(board[row]);
        }
    }
    console.log('sumAll=' + sum);
    console.log(' ---------------');
    return sum;
}

console.timeEnd("Time this");