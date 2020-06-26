/*
JOSEPH P. PASAOA
GameBoard Class | Tribute to Conway's Game of Life
*/


type cellStates = ('noLife' | 'willDie' | 'willRise' | 'livesOn');
type BoolOrStateMatrix = (boolean | cellStates)[][];
type Coordinates = [number, number];


class GameBoard {
  dataMatrix: BoolOrStateMatrix;

  constructor(aliveProbabilityPercent = 0, height = 40, length = 40) {
    this.dataMatrix = [];
    if (aliveProbabilityPercent === 0) {
      for (let buildRow = 0; buildRow < height; buildRow++) {
        const newFalseRow = new Array<boolean>(length).fill(false);
        this.dataMatrix.push(newFalseRow);
      }
    } else {
      for (let buildRow = 0; buildRow < height; buildRow++) {
        const newRow: boolean[] = [];
        for (let buildCol = 0; buildCol < length; buildCol++) {
          const randomPointer = Math.ceil(Math.random() * 100 + 1);
          newRow.push(randomPointer <= aliveProbabilityPercent ? true : false);
        }
        this.dataMatrix.push(newRow);
      }
    }
  }


  toggleCell = (targetCoordinates: Coordinates) => {
    const [targetRow, targetCol] = targetCoordinates;
    this.dataMatrix[targetRow][targetCol] = !this.dataMatrix[targetRow][targetCol];
  }

  evalCellNextStatus = (inputCoordinates: Coordinates) => {
    const { dataMatrix } = this;

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
            dataMatrix[currentRow] &&
            dataMatrix[currentRow][currentCol]
            ) numOfAliveNeighbors += 1;
        }
      }
      return numOfAliveNeighbors;
    }

    const [inputRow, inputCol] = inputCoordinates;
    // checks input coordinates point to in-bound cell, and throws error if not
    if (dataMatrix[inputRow] === undefined || dataMatrix[inputRow][inputCol] === undefined) {
      throw Error('out-of-bounds');
    }
    const isInputCellAlive = dataMatrix[inputRow][inputCol];
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
    const newMatrix: BoolOrStateMatrix = [];
    for (let buildRow = 0; buildRow < this.dataMatrix.length; buildRow++) {
      const newRow: boolean[] = [];
      for (let buildCol = 0; buildCol < this.dataMatrix[buildRow].length; buildCol++) {
        const currentCellCoordinates: Coordinates = [buildRow, buildCol];
        const cellNextStatus = evalCellNextStatus(currentCellCoordinates);
        newRow.push(cellNextStatus);
      }
      newMatrix.push(newRow);
    }
    this.dataMatrix = [...newMatrix];
  }

  nextPredictiveState = () => {
    const { evalCellNextStatus } = this;
    const newMatrix: BoolOrStateMatrix = [];
    for (let buildRow = 0; buildRow < this.dataMatrix.length; buildRow++) {
      const newRow: cellStates[] = [];
      for (let buildCol = 0; buildCol < this.dataMatrix[buildRow].length; buildCol++) {
        const currentCellCoordinates: Coordinates = [buildRow, buildCol];
        const cellNextStatus = evalCellNextStatus(currentCellCoordinates);
        const currentCellStatus = this.dataMatrix[buildRow][buildCol];
        if (currentCellStatus) {
          newRow.push(cellNextStatus ? 'livesOn' : 'willDie');
        } else /* currently dead */ {
          newRow.push(cellNextStatus ? 'willRise' : 'noLife');
        }
      }
      newMatrix.push(newRow);
    }
    this.dataMatrix = [...newMatrix];
  }
}


/*
false -> false  // noLife   \ -> false  // noLife
true -> false   // willDie  / -> true   // willRise
false -> true   // willRise \ -> false  // willDie
true -> true    // livesOn  / -> true   // livesOn

*/

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
// console.log(board.dataMatrix);
// board.dataMatrix = board.returnNextState();
// console.log(board.dataMatrix);
// board.dataMatrix = board.returnNextState();
// console.log(board.dataMatrix);


export default GameBoard;
