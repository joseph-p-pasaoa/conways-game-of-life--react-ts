/*
JOSEPH P. PASAOA
FeedbackDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'



/* TYPING */
interface Props {
  actualTickInterval: number;
  isClockRunning: boolean;
  ticksPassed: number;
}



/* COMPONENT */
const FeedbackDisplay = (props: Props) => {
  const { actualTickInterval, isClockRunning, ticksPassed } = props;


  return(
    <div className='status-display'>
      <div><strong>Tick Interval (in milliseconds):</strong> {actualTickInterval}</div>
      <div><strong>Age (in ticks):</strong> {ticksPassed}</div>
      <div><strong>Clock:</strong> {isClockRunning ? 'running' : 'stopped'}</div>
    </div>
  );
}



/* EXPORT */
export default FeedbackDisplay;
