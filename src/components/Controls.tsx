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


  let speedLabel = '1 sec (medium)';
  if (tickDuration === 50) speedLabel = '1/20 sec (max)';
  else if (tickDuration === 3000) speedLabel = '3 secs (min)';
  else if (tickDuration < 900) speedLabel = 'fast';
  else if (tickDuration > 1100) speedLabel = 'slow';
  else if (tickDuration !== 1000) speedLabel = 'medium';


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
        <div>Clock Speed: {speedLabel}</div>
        <input
          id='inputTickDuration'
          type='range'
          value={tickDuration}
          min={50}
          max={3000}
          step={50}
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
