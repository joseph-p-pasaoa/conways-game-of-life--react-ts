/*
JOSEPH P. PASAOA
APP Component | Tribute to Conway's Game of Life
*/


import React, { useState } from 'react';
import MatrixDisplay from './components/MatrixDisplay';

import './App.scss';


/* HELPER */
interface Array<T> {
  fill(value: T): Array<T>;
}

const createMatrix = (height: number, length: number): boolean[][] => {
  const output: boolean[][] = [];
  for (let row = 0; row < height; row++) {
    const newRow: boolean[] = new Array<boolean>(length).fill(false);
    output.push(newRow);
  }
  return output;
}


const App = () => {
  const [boolMatrix, setBoolMatrix] = useState(createMatrix(50, 50));




  // class Board {
  //   matrix: boolean[][];
  //   constructor(height: number, length: number) {
  //     this.matrix = [];
  //     for (let row = 0; row < height; row++) {
  //       const newRow: boolean[] = new Array<boolean>(length).fill(false);
  //       this.matrix.push(newRow);
  //     }
  //   }

  // toggleNode = (coordinates: [number, number]): void => {
  //   const [row, col] = coordinates;
  //   this.matrix[row][col] = !this.matrix[row][col];
  // }

  const handleClickCell = (targetCoordinates: [number, number]) => {
    const [targetRow, targetCol] = targetCoordinates;
    const newBoolMatrix = [ ...boolMatrix ];
    newBoolMatrix[targetRow][targetCol] = !newBoolMatrix[targetRow][targetCol];
    setBoolMatrix(newBoolMatrix);
  }

  //   evalNeighbors = (inputCoordinates: [number, number]): number => {
  //     const [inputRow, inputCol] = inputCoordinates;
  //     let numOfAlive: number = 0;
  //     for (let row = -1; row <= 1; row++) {
  //       for (let col = -1; col <= 1; col++) {
  //         const [currentRow, currentCol] =  [inputRow + row, inputCol + col];
  //         if (row === 0 && col === 0) {
  //           continue;
  //         }
  //         if (
  //           this.matrix[currentRow] &&
  //           this.matrix[currentRow][currentCol] &&
  //           this.matrix[currentRow][currentCol] === true
  //           ) numOfAlive += 1;
  //       }
  //     }
  //     return numOfAlive;
  //   }

  //   evalNextNodeState = (inputCoordinates: [number, number]): boolean => {
  //     const [inputRow, inputCol] = inputCoordinates;
  //     if (this.matrix[inputRow] === undefined || this.matrix[inputRow][inputCol] === undefined) {
  //       throw Error('out-of-bounds');
  //     }
  //     const currentIsAlive = this.matrix[inputRow][inputCol];
  //     const numNeighbors = this.evalNeighbors([inputRow, inputCol]);
  //     if (currentIsAlive) {
  //       if (numNeighbors === 2 || numNeighbors === 3) {
  //         return true;
  //       }
  //     } else {
  //       if (numNeighbors === 3) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   }

  //   runTick = (): void => {
  //     const newMatrix: boolean[][] = [];

  //     for (let row = 0; row < this.matrix.length; row++) {
  //       const newRow: boolean[] = [];

  //       for (let col = 0; col < this.matrix[row].length; col++) {
  //         const coordinates: [number, number] = [row, col];
  //         const outcome = this.evalNextNodeState(coordinates);
  //         newRow.push(outcome);
  //       }

  //       newMatrix.push(newRow);
  //     }

  //     this.matrix = [...newMatrix];
  //   }
  // }


  /* TESTING */
  // const board = new Board(5, 10);
  // board.toggleNode([0, 1]);
  // board.toggleNode([1, 1]);
  // board.toggleNode([2, 1]);
  // board.toggleNode([2, 2]);
  // board.toggleNode([1, 3]);
  // board.toggleNode([2, 7]);
  // board.toggleNode([3, 7]);
  // board.toggleNode([3, 8]);
  // console.log(board.evalNeighbors([2, 3]) === 1);
  // console.log(board.evalNeighbors([1, 1]) === 3);
  // console.log(board.evalNeighbors([4, 6]) === 0);
  // console.log(board.evalNextNodeState([2, 3]) === false);
  // console.log(board.evalNextNodeState([1, 1]) === true);
  // console.log(board.evalNextNodeState([4, 6]) === false);
  // console.log(board.matrix);
  // board.runTick();
  // console.log(board.matrix);
  // board.runTick();
  // console.log(board.matrix);


  return (
    <div className="App">
      Tribute to Conway's Game of Life. Developed by Joseph P. Pasaoa.
      <MatrixDisplay
        boolMatrix={boolMatrix}
        handleClickCell={handleClickCell}
      />
    </div>
  );
}


export default App;
