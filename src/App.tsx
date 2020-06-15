/*
JOSEPH P. PASAOA
APP Component | Tribute to Conway's Game of Life
*/


import React from 'react';

import './App.scss';


const App = () => {
  interface Array<T> {
    fill(value: T): Array<T>;
  }

  class Board {
    board: boolean[][];
    constructor(height: number, length: number) {
      this.board = [];
      for (let row = 0; row < height; row++) {
        const newRow: boolean[] = new Array<boolean>(length).fill(false);
        this.board.push(newRow);
      }
    }

    toggleNode = (coordinates: [number, number]): void => {
      const [row, col] = coordinates;
      this.board[row][col] = !this.board[row][col];
    }

    evalNeighbors = (inputCoordinates: [number, number]): number => {
      const [inputRow, inputCol] = inputCoordinates;
      let numOfAlive: number = 0;
      for (let row = -1; row <= 1; row++) {
        for (let col = -1; col <= 1; col++) {
          const [currentRow, currentCol] =  [inputRow + row, inputCol + col];
          if (row === 0 && col === 0) {
            continue;
          }
          if (
            this.board[currentRow] &&
            this.board[currentRow][currentCol] &&
            this.board[currentRow][currentCol] === true
            ) numOfAlive += 1;
        }
      }
      return numOfAlive;
    }

    evalNextNodeState = (inputCoordinates: [number, number]): boolean => {
      const [inputRow, inputCol] = inputCoordinates;
      if (this.board[inputRow] === undefined || this.board[inputRow][inputCol] === undefined) {
        throw Error('out-of-bounds');
      }
      const currentIsAlive = this.board[inputRow][inputCol];
      const numNeighbors = this.evalNeighbors([inputRow, inputCol]);
      if (currentIsAlive) {
        if (numNeighbors === 2 || numNeighbors === 3) {
          return true;
        }
      } else {
        if (numNeighbors === 3) return true;
      }
      return false;
    }
  }


  const board = new Board(5, 10);
  board.toggleNode([0, 1]);
  board.toggleNode([0, 2]);
  board.toggleNode([1, 1]);
  board.toggleNode([1, 2]);
  console.log(board.evalNeighbors([2, 3]) === 1);
  console.log(board.evalNeighbors([1, 1]) === 3);
  console.log(board.evalNeighbors([4, 6]) === 0);
  console.log(board.evalNextNodeState([2, 3]) === false);
  console.log(board.evalNextNodeState([1, 1]) === true);
  console.log(board.evalNextNodeState([4, 6]) === false);
  console.log(board);

  return (
    <div className="App">
      Hello world! I am alive.
    </div>
  );
}


export default App;
