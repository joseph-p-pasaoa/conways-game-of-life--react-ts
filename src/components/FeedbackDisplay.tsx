/*
JOSEPH P. PASAOA
FeedbackDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'



/* TYPING */
interface Props {
  isClockRunning: boolean;
  ticksPassed: number;
}



/* COMPONENT */
const FeedbackDisplay = (props: Props) => {
  const { isClockRunning, ticksPassed } = props;


  return(
    <div className='status-display'>
      <div><strong>Age (in ticks):</strong> {ticksPassed}</div>
      <div><strong>Clock:</strong> {isClockRunning ? 'running' : 'stopped'}</div>
    </div>
  );
}



/* EXPORT */
export default FeedbackDisplay;
