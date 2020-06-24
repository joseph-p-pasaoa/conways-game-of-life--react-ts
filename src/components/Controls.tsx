/*
JOSEPH P. PASAOA
Controls Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React, { useState, ChangeEvent } from 'react'



/* TYPING */
interface Props {
  isClockRunning: boolean;
  handleSetTickInterval: (milliseconds: number) => void;
  handleClickAdvanceOneTick: () => void;
  handleToggleClock: () => void;
}



/* COMPONENT */
const Controls = (props: Props) => {
  const {
    isClockRunning,
    handleSetTickInterval,
    handleClickAdvanceOneTick,
    handleToggleClock
  } = props;
  const [tickIntervalInput, setTickIntervalInput] = useState(1000);  // number in milliseconds (ms)

  const handleChangeTickInterval = (event: ChangeEvent<HTMLInputElement>) => {
    setTickIntervalInput(parseInt(event.target.value));
  }


  return(
    <div className='controls'>
      <button
        type='button'
        onClick={handleClickAdvanceOneTick}
      >
        Advance +1 Tick
      </button>
      <label htmlFor='inputTickInterval'>Milliseconds per tick:</label>
      <input
        id='inputTickInterval'
        type='number'
        value={tickIntervalInput}
        onChange={handleChangeTickInterval}
        className='textinput--tickinterval'
      />
      <button
        type='button'
        onClick={() => handleSetTickInterval(tickIntervalInput)}
      >
        Set
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
