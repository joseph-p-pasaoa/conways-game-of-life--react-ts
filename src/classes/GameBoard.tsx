/*
JOSEPH P. PASAOA
GameBoard Class | Tribute to Conway's Game of Life
*/


type Coordinates = [number, number];
type BoolMatrix = boolean[][];
interface StatusObject {
  boolMatrix: boolean[][];
}


class GameBoard {
  data: StatusObject;

  constructor(aliveProbabilityPercent = 0, height = 40, length = 40) {
    this.data = { boolMatrix: [] };
    let { boolMatrix } = this.data;
    if (aliveProbabilityPercent === 0) {
      for (let buildRow = 0; buildRow < height; buildRow++) {
        const newFalseRow = new Array<boolean>(length).fill(false);
        boolMatrix.push(newFalseRow);
      }
    } else {
      for (let buildRow = 0; buildRow < height; buildRow++) {
        const newRow: boolean[] = [];
        for (let buildCol = 0; buildCol < length; buildCol++) {
          const randomPointer = Math.ceil(Math.random() * 100 + 1);
          newRow.push(randomPointer <= aliveProbabilityPercent ? true : false);
        }
        boolMatrix.push(newRow);
      }
    }
  }


  toggleCell = (targetCoordinates: Coordinates) => {
    const [targetRow, targetCol] = targetCoordinates;
    let { boolMatrix } = this.data;
    boolMatrix[targetRow][targetCol] = !boolMatrix[targetRow][targetCol];
  }

  evalCellNextStatus = (inputCoordinates: Coordinates) => {
    const { boolMatrix } = this.data;

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

  advanceToNextBoardState = () => {
    const { evalCellNextStatus } = this;
    const newMatrix: BoolMatrix = [];
    for (let buildRow = 0; buildRow < this.data.boolMatrix.length; buildRow++) {
      const newRow: boolean[] = [];
      for (let buildCol = 0; buildCol < this.data.boolMatrix[buildRow].length; buildCol++) {
        const currentCellCoordinates: Coordinates = [buildRow, buildCol];
        const cellNextStatus = evalCellNextStatus(currentCellCoordinates);
        newRow.push(cellNextStatus);
      }
      newMatrix.push(newRow);
    }
    this.data.boolMatrix = [...newMatrix];
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
// console.log(board.data);
// board.data = board.returnNextState();
// console.log(board.data);
// board.data = board.returnNextState();
// console.log(board.data);


export default GameBoard;
