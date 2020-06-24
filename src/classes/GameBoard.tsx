/*
JOSEPH P. PASAOA
GameBoard Class | Tribute to Conway's Game of Life
*/


type BooleanMatrix = boolean[][];
type Coordinates = [number, number];


class GameBoard {
  boolMatrix: BooleanMatrix;

  constructor(height = 40, length = 40) {
    this.boolMatrix = [];
    for (let buildRow = 0; buildRow < height; buildRow++) {
      const newFalseRow = new Array<boolean>(length).fill(false);
      this.boolMatrix.push(newFalseRow);
    }
  }


  toggleCell = (targetCoordinates: Coordinates) => {
    const [targetRow, targetCol] = targetCoordinates;
    this.boolMatrix[targetRow][targetCol] = !this.boolMatrix[targetRow][targetCol];
  }

  evalCellNextStatus = (inputCoordinates: Coordinates) => {
    const { boolMatrix } = this;

    // helper function: takes in cell coordinates and returns count of truthy neighbors
    const countAliveNeighbors = (inputCoordinates: Coordinates) => {
      const [inputRow, inputCol] = inputCoordinates;
      let numOfAliveNeighbors = 0;
      for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
        for (let colOffset = -1; colOffset <= 1; colOffset++) {
          const [currentRow, currentCol] =  [inputRow + rowOffset, inputCol + colOffset];
          if (rowOffset === 0 && colOffset === 0) {
            continue; // skip input cell
          }
          if (
            boolMatrix[currentRow] &&
            boolMatrix[currentRow][currentCol]
            ) numOfAliveNeighbors += 1;
        }
      }
      return numOfAliveNeighbors;
    }

    const [inputRow, inputCol] = inputCoordinates;
    // checks input coordinates point to in-bound cell, and throws error if not
    if (boolMatrix[inputRow] === undefined || boolMatrix[inputRow][inputCol] === undefined) {
      throw Error('out-of-bounds');
    }
    const isInputCellAlive = boolMatrix[inputRow][inputCol];
    const numOfAliveNeighbors = countAliveNeighbors(inputCoordinates);
    if (isInputCellAlive) {
      if (numOfAliveNeighbors === 2 || numOfAliveNeighbors === 3) {
        return true;
      }
    } else if (numOfAliveNeighbors === 3) {
      return true;
    }
    return false;
  }

  buildNewMatrixHelper = (cb: (coords: Coordinates) => boolean) => {
    const newMatrix: BooleanMatrix = [];
    for (let buildRow = 0; buildRow < this.boolMatrix.length; buildRow++) {
      const newRow: boolean[] = [];
      for (let buildCol = 0; buildCol < this.boolMatrix[buildRow].length; buildCol++) {
        const currentCellCoordinates: Coordinates = [buildRow, buildCol];
        const cellNextStatus = cb(currentCellCoordinates);
        newRow.push(cellNextStatus);
      }
      newMatrix.push(newRow);
    }
    return newMatrix;
  }

  advanceToNextBoardState = () => {
    const { buildNewMatrixHelper, evalCellNextStatus } = this;
    const newMatrix = buildNewMatrixHelper(evalCellNextStatus);
    this.boolMatrix = [...newMatrix];
  }
}


/* TESTING */
// const board = new GameBoard(5, 10);
// board.toggleCell([0, 1]);
// board.toggleCell([1, 1]);
// board.toggleCell([2, 1]);
// board.toggleCell([2, 2]);
// board.toggleCell([1, 3]);
// board.toggleCell([2, 7]);
// board.toggleCell([3, 7]);
// board.toggleCell([3, 8]);
// // console.log(board.countAliveNeighbors([2, 3]) === 1);
// // console.log(board.countAliveNeighbors([1, 1]) === 3);
// // console.log(board.countAliveNeighbors([4, 6]) === 0);
// console.log(board.evalCellNextStatus([2, 3]) === false);
// console.log(board.evalCellNextStatus([1, 1]) === true);
// console.log(board.evalCellNextStatus([4, 6]) === false);
// console.log(board.boolMatrix);
// board.boolMatrix = board.returnNextState();
// console.log(board.boolMatrix);
// board.boolMatrix = board.returnNextState();
// console.log(board.boolMatrix);


export default GameBoard;
