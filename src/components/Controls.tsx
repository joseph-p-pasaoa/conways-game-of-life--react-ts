/*
JOSEPH P. PASAOA
Controls Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'



/* TYPING */
interface Props {
  isClockRunning: boolean;
  handleClickAdvanceOneTick: () => void;
  handleToggleClock: () => void;
}



/* COMPONENT */
const Controls = (props: Props) => {
  const { isClockRunning, handleClickAdvanceOneTick, handleToggleClock } = props;


  return(
    <div className='controls'>
      <button
        type='button'
        onClick={handleClickAdvanceOneTick}
      >
        Advance +1 Tick
      </button>
      <button
        type='button'
        onClick={handleToggleClock}
        className={`clocktoggle ${isClockRunning ? 'running' : ''}`}
      >
        {isClockRunning ? 'STOP Clock' : 'START Clock'}
      </button>
    </div>
  );
}



/* EXPORT */
export default Controls;
