/*
JOSEPH P. PASAOA
Controls Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'



/* TYPING */
export interface Props {
  isClockRunning: boolean;
  runOneTick: () => void;
  handleToggleClock: () => void;
}



/* COMPONENT */
const Controls = (props: Props) => {
  const { isClockRunning, runOneTick, handleToggleClock } = props;


  return(
    <div className='controls'>
      <button
        type='button'
        onClick={runOneTick}
      >
        Advance +1 Tick
      </button>
      <button
        type='button'
        onClick={handleToggleClock}
      >
        {isClockRunning ? 'Stop Clock' : 'Start Clock'}
      </button>

    </div>
  );
}



/* EXPORT */
export default Controls;
