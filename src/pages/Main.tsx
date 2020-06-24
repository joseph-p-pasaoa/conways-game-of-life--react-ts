/*
JOSEPH P. PASAOA
MAIN Component | Tribute to Conway's Game of Life
*/



/* IMPORTS */
import React, { useState, useEffect } from 'react';

import GameBoard from '../classes/GameBoard';
import '../App.scss';
import Header from '../components/Header';
import Controls from '../components/Controls';
import FeedbackDisplay from '../components/FeedbackDisplay';
import MatrixDisplay from '../components/MatrixDisplay';



/* TYPING */
type Coordinates = [number, number];



/* COMPONENT */
const Main = () => {
  const [board, setBoard] = useState(new GameBoard());
  const [reload, setReload] = useState(0);
  const [actualTickInterval, setActualTickInterval] = useState(1000);  // number in milliseconds (ms)
  const [ticksPassed, setTicksPassed] = useState(0);
  const [isClockRunning, setIsClockRunning] = useState(false);

  useEffect(() => {
    let clock: NodeJS.Timer;
    if (isClockRunning && actualTickInterval !== 0) {
      clock = setInterval(() => {
        board.advanceToNextBoardState();
        setTicksPassed(ticksPassed + 1);
      }, actualTickInterval);
    }
    return () => clearInterval(clock);
  }, [board, isClockRunning, ticksPassed, actualTickInterval]);


  // EVENT HANDLERS
  const handleClickCell = (targetCoordinates: Coordinates) => {
    board.toggleCell(targetCoordinates);
    setReload(reload + 1);
  }

  const handleClickAdvanceOneTick = () => {
    board.advanceToNextBoardState();
    setTicksPassed(ticksPassed + 1);
  }

  const handleToggleClock = () => {
    setIsClockRunning(!isClockRunning);
  }

  const handleSetTickInterval = (milliseconds: number) => {
    setActualTickInterval(milliseconds);
  }


  // RETURN
  return (
    <div className='Main'>
      <div className='sidebar'>
        <Header />
        <Controls
          isClockRunning={isClockRunning}
          handleSetTickInterval={handleSetTickInterval}
          handleClickAdvanceOneTick={handleClickAdvanceOneTick}
          handleToggleClock={handleToggleClock}
        />
        <FeedbackDisplay
          isClockRunning={isClockRunning}
          actualTickInterval={actualTickInterval}
          ticksPassed={ticksPassed}
        />
      </div>
      <MatrixDisplay
        boolMatrix={board.boolMatrix}
        handleClickCell={handleClickCell}
        reload={reload}
      />
    </div>
  );
}



/* EXPORT */
export default Main;
