/*
JOSEPH P. PASAOA
FeedbackDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'



/* TYPING */
export interface Props {
  isClockRunning: boolean;
  ticksPassed: number;
}



/* COMPONENT */
const FeedbackDisplay = (props: Props) => {
  const { isClockRunning, ticksPassed } = props;


  return(
    <div className='status-display'>
      <div><strong>Age:</strong> {ticksPassed}</div>
      <div><strong>Clock:</strong> {isClockRunning ? 'RUNNING' : 'STOPPED'}</div>
    </div>
  );
}



/* EXPORT */
export default FeedbackDisplay;
