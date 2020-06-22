/*
JOSEPH P. PASAOA
Controls Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React,
{ ChangeEvent } from 'react'



/* TYPING */
interface Props {
  isClockRunning: boolean;
  tickInterval: number;
  handleChangeTickInterval: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickAdvanceOneTick: () => void;
  handleToggleClock: () => void;
}



/* COMPONENT */
const Controls = (props: Props) => {
  const {
    isClockRunning,
    tickInterval,
    handleChangeTickInterval,
    handleClickAdvanceOneTick,
    handleToggleClock
  } = props;


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
        value={tickInterval}
        onChange={handleChangeTickInterval}
        className='textinput--tickinterval'
      />
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
