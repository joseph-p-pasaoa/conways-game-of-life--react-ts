/*
JOSEPH P. PASAOA
Controls Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'



/* TYPING */
export interface Props {
  runOneTick: () => void;
  handleToggleClock: () => void;
}



/* COMPONENT */
const Controls = (props: Props) => {
  const { runOneTick, handleToggleClock } = props;


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
        Start/Stop Clock
      </button>

    </div>
  );
}



/* EXPORT */
export default Controls;
