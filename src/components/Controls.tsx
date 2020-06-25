/*
JOSEPH P. PASAOA
Controls Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React, { useState, ChangeEvent } from 'react';



/* TYPING */
interface Props {
  isClockRunning: boolean;
  actualTickInterval: number;
  handleGenNewRandomizedPopulation: () => void;
  handleSetTickInterval: (milliseconds: number) => void;
  handleClickAdvanceOneTick: () => void;
  handleToggleClock: () => void;
}



/* COMPONENT */
const Controls = (props: Props) => {
  const {
    isClockRunning,
    actualTickInterval,
    handleGenNewRandomizedPopulation,
    handleSetTickInterval,
    handleClickAdvanceOneTick,
    handleToggleClock
  } = props;
  const [isTickIntervalInputActive, setIsTickIntervalInputActive] = useState(false);
  const [tickIntervalInput, setTickIntervalInput] = useState(1000);  // number in milliseconds (ms)

  const handleChangeTickInterval = (event: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseInt(event.target.value))) setTickIntervalInput(0);
    else setTickIntervalInput(parseInt(event.target.value));
  }


  return(
    <div className='controls'>
      <button
        type='button'
        onClick={handleGenNewRandomizedPopulation}
      >
        New Random Population
      </button>
      <button
        type='button'
        onClick={handleClickAdvanceOneTick}
      >
        Advance +1 Generation
      </button>
      <label htmlFor='inputTickInterval' className='tickinterval__label'>
        <div>Milliseconds per generation:</div>
        <input
          id='inputTickInterval'
          type='text'
          value={isTickIntervalInputActive ? tickIntervalInput : actualTickInterval}
          onFocus={() => setIsTickIntervalInputActive(true)}
          onBlur={() => setTimeout(() => setIsTickIntervalInputActive(false), 150)}
          onChange={handleChangeTickInterval}
          className={`tickinterval__textinput ${isTickIntervalInputActive ? '' : 'highlight'}`}
        />
        <span className={`tickinterval__msg ${isTickIntervalInputActive ? 'show' : ''}`}> <b>currently: {actualTickInterval}</b> (minimum is 100)</span>
      </label>
      <button
        type='submit'
        onClick={() => {
            if (tickIntervalInput < 100) setTickIntervalInput(100);
            handleSetTickInterval(tickIntervalInput);
        }}
      >
        Set
      </button>
      <button
        type='button'
        onClick={handleToggleClock}
        className={`clocktoggle ${isClockRunning ? 'running' : ''}`}
      >
        {isClockRunning ? 'STOP Clock' : 'RUN Clock'}
      </button>
    </div>
  );
}



/* EXPORT */
export default Controls;
