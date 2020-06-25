/*
JOSEPH P. PASAOA
Controls Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React, { ChangeEvent } from 'react';



/* TYPING */
interface Props {
  isClockRunning: boolean;
  tickDuration: number;
  handleGenNewRandomizedPopulation: () => void;
  handleChangeTickDuration: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickAdvanceOneTick: () => void;
  handleToggleClock: () => void;
}



/* COMPONENT */
const Controls = (props: Props) => {
  const {
    isClockRunning,
    tickDuration,
    handleGenNewRandomizedPopulation,
    handleChangeTickDuration,
    handleClickAdvanceOneTick,
    handleToggleClock
  } = props;


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
      <label htmlFor='inputTickDuration' className='tickduration__label'>
        <div>Clock Speed</div>
        <input
          id='inputTickDuration'
          type='range'
          value={tickDuration}
          min={50}
          max={3000}
          onChange={handleChangeTickDuration}
          className='tickduration__rangeinput'
        />
      </label>
      {/* <button
        type='submit'
        onClick={() => {
            if (tickdurationInput < 100) setTickdurationInput(100);
            handleSetTickduration(tickIntervalInput);
        }}
      >
        Set
      </button> */}
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
