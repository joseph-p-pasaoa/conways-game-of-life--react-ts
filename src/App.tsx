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
  }


  const board = new Board(5, 10);
  console.log(board);

  return (
    <div className="App">
      Hello world! I am alive.
    </div>
  );
}


export default App;
