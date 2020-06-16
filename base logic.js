/*
JOSEPH P. PASAOA
BASE LOGIC | Tribute to Conway's Game of Life
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Board = /** @class */ (function () {
    function Board(height, length) {
        var _this = this;
        this.toggleNode = function (coordinates) {
            var row = coordinates[0], col = coordinates[1];
            _this.matrix[row][col] = !_this.matrix[row][col];
        };
        this.evalNeighbors = function (inputCoordinates) {
            var inputRow = inputCoordinates[0], inputCol = inputCoordinates[1];
            var numOfAlive = 0;
            for (var row = -1; row <= 1; row++) {
                for (var col = -1; col <= 1; col++) {
                    var _a = [inputRow + row, inputCol + col], currentRow = _a[0], currentCol = _a[1];
                    if (row === 0 && col === 0) {
                        continue;
                    }
                    if (_this.matrix[currentRow] &&
                        _this.matrix[currentRow][currentCol] &&
                        _this.matrix[currentRow][currentCol] === true)
                        numOfAlive += 1;
                }
            }
            return numOfAlive;
        };
        this.evalNextNodeState = function (inputCoordinates) {
            var inputRow = inputCoordinates[0], inputCol = inputCoordinates[1];
            if (_this.matrix[inputRow] === undefined || _this.matrix[inputRow][inputCol] === undefined) {
                throw Error('out-of-bounds');
            }
            var currentIsAlive = _this.matrix[inputRow][inputCol];
            var numNeighbors = _this.evalNeighbors([inputRow, inputCol]);
            if (currentIsAlive) {
                if (numNeighbors === 2 || numNeighbors === 3) {
                    return true;
                }
            }
            else {
                if (numNeighbors === 3) {
                    return true;
                }
            }
            return false;
        };
        this.runTick = function () {
            var newMatrix = [];
            for (var row = 0; row < _this.matrix.length; row++) {
                var newRow = [];
                for (var col = 0; col < _this.matrix[row].length; col++) {
                    var coordinates = [row, col];
                    var outcome = _this.evalNextNodeState(coordinates);
                    newRow.push(outcome);
                }
                newMatrix.push(newRow);
            }
            _this.matrix = __spreadArrays(newMatrix);
        };
        this.matrix = [];
        for (var row = 0; row < height; row++) {
            var newRow = new Array(length).fill(false);
            this.matrix.push(newRow);
        }
    }
    return Board;
}());
/* TESTING */
var board = new Board(5, 10);
board.toggleNode([0, 1]);
board.toggleNode([1, 1]);
board.toggleNode([2, 1]);
board.toggleNode([2, 2]);
board.toggleNode([1, 3]);
board.toggleNode([2, 7]);
board.toggleNode([3, 7]);
board.toggleNode([3, 8]);
console.log(board.evalNeighbors([2, 3]) === 1);
console.log(board.evalNeighbors([1, 1]) === 3);
console.log(board.evalNeighbors([4, 6]) === 0);
console.log(board.evalNextNodeState([2, 3]) === false);
console.log(board.evalNextNodeState([1, 1]) === true);
console.log(board.evalNextNodeState([4, 6]) === false);
console.log(board.matrix);
board.runTick();
console.log(board.matrix);
board.runTick();
console.log(board.matrix);
