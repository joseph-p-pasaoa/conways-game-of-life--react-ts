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
  handleGenNewBoard: () => void;
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
    handleGenNewBoard,
    handleChangeTickDuration,
    handleClickAdvanceOneTick,
    handleToggleClock
  } = props;


  // dynamically creates labeling for tick duration slider
  let speedLabel = '1s (medium)';
  switch (tickDuration) {
    case 50: speedLabel = '1/20s (fastest)'; break;
    case 100: speedLabel = '1/10s (fast)'; break;
    case 200: speedLabel = '1/5s (fast)'; break;
    case 250: speedLabel = '1/4s (fast)'; break;
    case 500: speedLabel = '1/2s (fast)'; break;
    case 1500: speedLabel = '1.5s (slow)'; break;
    case 2000: speedLabel = '2s (slow)'; break;
    case 3000: speedLabel = '3s (slowest)'; break;
    default:
      const floatDuration = (tickDuration / 1000).toFixed(2);
      if (tickDuration < 550) speedLabel = `${floatDuration}s (fast)`;
      else if (tickDuration > 1450) speedLabel = `${floatDuration}s (slow)`;
      else if (tickDuration !== 1000) speedLabel = `${floatDuration}s (medium)`;
  }


  return(
    <div className='controls'>
      <div>
        <button
          type='button'
          onClick={handleGenNewRandomizedPopulation}
        >
          New Random Population
        </button>
        <button
          type='button'
          onClick={handleGenNewBoard}
        >
          Reset Board
        </button>
      </div>
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
          list='tickDurationDetents'
          onChange={handleChangeTickDuration}
          className='tickduration__rangeinput'
        />
        <datalist id='tickDurationDetents'>
          <option value='50' />
          <option value='100' />
          <option value='200' />
          <option value='250' />
          <option value='500' />
          <option value='1000' />
          <option value='1500' />
          <option value='2000' />
          <option value='3000' />
        </datalist>
      </label>
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
