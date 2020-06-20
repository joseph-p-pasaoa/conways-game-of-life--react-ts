/*
JOSEPH P. PASAOA
MAIN Component | Tribute to Conway's Game of Life
*/



/* TODOS
- connect interval input to clock
- foresight coloration option (black = not going to die, red = going to die)
- grid units customization
- grid size customization
- draggable toggling of cells
*/



/* IMPORTS */
import React, { useState } from 'react';

import GameBoard from '../classes/GameBoard';
// import useInterval from '../customhooks/useInterval';
import '../App.scss';
// import Controls from '../components/Controls';
// import FeedbackDisplay from '../components/FeedbackDisplay';
import MatrixDisplay from '../components/MatrixDisplay';



/* TYPING */
// interface Array<T> {
//   fill(value: T): Array<T>;
// }



/* SIDEKICK FUNCTION CREATEMATRIX  */
// const createMatrix = (height: number, length: number): boolean[][] => {
//   const output: boolean[][] = [];
//   for (let row = 0; row < height; row++) {
//     const newRow: boolean[] = new Array<boolean>(length).fill(false);
//     output.push(newRow);
//   }
//   return output;
// }



/* COMPONENT */
const App = () => {
  const [board, setBoard] = useState(new GameBoard(36, 54));
  // const [isClockRunning, setIsClockRunning] = useState(false);
  // const [tickInterval, setTickInterval] = useState(1000);  // number in milliseconds (ms)
  // const [ticksPassed, setTicksPassed] = useState(0);

  // useInterval(() => {
  //   runOneTick();
  // }, isClockRunning ? tickInterval : null);


  // EVENT HANDLERS
  // const handleClickCell = (targetCoordinates: [number, number]) => {
  //   const [targetRow, targetCol] = targetCoordinates;
  //   const newBoolMatrix = [ ...boolMatrix ];
  //   newBoolMatrix[targetRow][targetCol] = !newBoolMatrix[targetRow][targetCol];
  //   setBoolMatrix(newBoolMatrix);
  // }

  // const handleToggleClock = () => {
  //   setIsClockRunning(!isClockRunning);
  // }


  // RETURN
  return (
    <div className='Homepage'>
      Tribute to Conway's Game of Life. Developed by Joseph P. Pasaoa.<br />
      {/* <Controls
        isClockRunning={isClockRunning}
        runOneTick={runOneTick}
        handleToggleClock={handleToggleClock}
      /> */}
      {/* <FeedbackDisplay
        isClockRunning={isClockRunning}
        ticksPassed={ticksPassed}
      /> */}
      <MatrixDisplay
        boolMatrix={board.boolMatrix}
        // handleClickCell={handleClickCell}
      />
    </div>
  );
}



/* EXPORT */
export default App;
