/*
JOSEPH P. PASAOA
MAIN Component | Tribute to Conway's Game of Life
*/



/* IMPORTS */
import React, { useState, useEffect, ChangeEvent } from 'react';

import GameBoard from '../classes/GameBoard';
import '../App.scss';
import Header from '../components/Header';
import Description from '../components/Description';
import Controls from '../components/Controls';
import FeedbackDisplay from '../components/FeedbackDisplay';
import MatrixDisplay from '../components/MatrixDisplay';



/* TYPING */
type Coordinates = [number, number];



/* COMPONENT */
const Main = () => {
  const [board, setBoard] = useState(new GameBoard());
  const [reload, setReload] = useState(0);
  const [tickDuration, setTickDuration] = useState(1000);  // number in milliseconds (ms)
  const [ticksPassed, setTicksPassed] = useState(0);
  const [isClockRunning, setIsClockRunning] = useState(false);

  useEffect(() => {
    let clock: NodeJS.Timer;
    if (isClockRunning && tickDuration !== 0) {
      clock = setInterval(() => {
        board.advanceToNextBoardState();
        setTicksPassed(ticksPassed + 1);
      }, tickDuration);
    }
    return () => clearInterval(clock);
  }, [board, isClockRunning, ticksPassed, tickDuration]);


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

  const handleChangeTickDuration = (event: ChangeEvent<HTMLInputElement>) => {
    setTickDuration(parseInt(event.target.value));
  }

  const handleGenNewRandomizedPopulation = () => {
    setTicksPassed(0);
    setBoard(new GameBoard(22));  // DEV hardcode random true to 22% for now. todo input for random percent
  }

  const handleGenNewBoard = () => {
    setTicksPassed(0);
    setBoard(new GameBoard());
  }


  // RETURN
  return (
    <div className='Main'>
      <div className='sidebar'>
        <Header />
        <Description />
        <Controls
          isClockRunning={isClockRunning}
          tickDuration={tickDuration}
          handleGenNewRandomizedPopulation={handleGenNewRandomizedPopulation}
          handleGenNewBoard={handleGenNewBoard}
          handleChangeTickDuration={handleChangeTickDuration}
          handleClickAdvanceOneTick={handleClickAdvanceOneTick}
          handleToggleClock={handleToggleClock}
        />
        <FeedbackDisplay
          isClockRunning={isClockRunning}
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
