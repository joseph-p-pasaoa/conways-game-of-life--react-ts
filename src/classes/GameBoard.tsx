/*
JOSEPH P. PASAOA
GameBoard Class | Tribute to Conway's Game of Life
*/


// interface Array<T> {
//   fill(value: T): Array<T>;
// }


class GameBoard {
  boolMatrix: boolean[][];
  constructor(height: number, length: number) {
    this.boolMatrix = [];
    for (let row = 0; row < height; row++) {
      const newRow: boolean[] = new Array<boolean>(length).fill(false);
      this.boolMatrix.push(newRow);
    }
  }


  toggleCell = (targetCoordinates: [number, number]): void => {
    const { boolMatrix } = this;
    const [targetRow, targetCol] = targetCoordinates;
    boolMatrix[targetRow][targetCol] = !boolMatrix[targetRow][targetCol];
  }

  evalCellNextStatus = (inputCoordinates: [number, number]): boolean => {
    // Helper function
    const countAliveNeighbors = (inputCoordinates: [number, number]): number => {
      const [inputRow, inputCol] = inputCoordinates;
      let numOfAliveNeighbors = 0;
      for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
        for (let colOffset = -1; colOffset <= 1; colOffset++) {
          const [currentRow, currentCol] =  [inputRow + rowOffset, inputCol + colOffset];
          if (rowOffset === 0 && colOffset === 0) {
            continue;
          }
          if (
            this.boolMatrix[currentRow] &&
            this.boolMatrix[currentRow][currentCol]
            ) numOfAliveNeighbors += 1;
        }
      }
      return numOfAliveNeighbors;
    }

    const { boolMatrix } = this;
    const [inputRow, inputCol] = inputCoordinates;
    if (boolMatrix[inputRow] === undefined || boolMatrix[inputRow][inputCol] === undefined) {
      throw Error('out-of-bounds');
    }
    const inputCellIsAlive = boolMatrix[inputRow][inputCol];
    const numOfAliveNeighbors = countAliveNeighbors([inputRow, inputCol]);
    if (inputCellIsAlive) {
      if (numOfAliveNeighbors === 2 || numOfAliveNeighbors === 3) {
        return true;
      }
    } else if (numOfAliveNeighbors === 3) {
      return true;
    }
    return false;
  }

  advanceOneTick = (): void => {
    let { boolMatrix } = this;
    const { evalCellNextStatus } = this;
    const newMatrix: boolean[][] = [];
    for (let row = 0; row < boolMatrix.length; row++) {
      const newRow: boolean[] = [];
      for (let col = 0; col < boolMatrix[row].length; col++) {
        const currentCellCoordinates: [number, number] = [row, col];
        const cellNextStatus = evalCellNextStatus(currentCellCoordinates);
        newRow.push(cellNextStatus);
      }
      newMatrix.push(newRow);
    }
    boolMatrix = [ ...newMatrix ];
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
// console.log(board.countAliveNeighbors([2, 3]) === 1);
// console.log(board.countAliveNeighbors([1, 1]) === 3);
// console.log(board.countAliveNeighbors([4, 6]) === 0);
// console.log(board.evalCellNextStatus([2, 3]) === false);
// console.log(board.evalCellNextStatus([1, 1]) === true);
// console.log(board.evalCellNextStatus([4, 6]) === false);
// console.log(board.matrix);
// board.runOneTick();
// console.log(board.matrix);
// board.runOneTick();
// console.log(board.matrix);


export default GameBoard;
