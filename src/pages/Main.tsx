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
import Controls from '../components/Controls';
import FeedbackDisplay from '../components/FeedbackDisplay';
import MatrixDisplay from '../components/MatrixDisplay';



/* TYPING */
type Coordinates = [number, number];



/* COMPONENT */
const App = () => {
  const [board, setBoard] = useState(new GameBoard());
  const [reload, setReload] = useState(0);
  // const [isClockRunning, setIsClockRunning] = useState(false);
  // const [tickInterval, setTickInterval] = useState(1000);  // number in milliseconds (ms)
  // const [ticksPassed, setTicksPassed] = useState(0);

  // useInterval(() => {
  //   runOneTick();
  // }, isClockRunning ? tickInterval : null);


  // EVENT HANDLERS
  const handleClickCell = (targetCoordinates: Coordinates) => {
    board.toggleCell(targetCoordinates);
    setReload(reload + 1);
  }

  // const handleToggleClock = () => {
  //   setIsClockRunning(!isClockRunning);
  // }


  // RETURN
  return (
    <div className='Homepage'>
      Tribute to Conway's Game of Life. Developed by Joseph P. Pasaoa.<br />
      <Controls
        // isClockRunning={isClockRunning}
        handleClickAdvanceOneTick={handleClickAdvanceOneTick}
        // handleToggleClock={handleToggleClock}
      />
      <FeedbackDisplay
        // isClockRunning={isClockRunning}
        ticksPassed={ticksPassed}
      />
      <MatrixDisplay
        boolMatrix={board.boolMatrix}
        handleClickCell={handleClickCell}
      />
    </div>
  );
}



/* EXPORT */
export default App;
