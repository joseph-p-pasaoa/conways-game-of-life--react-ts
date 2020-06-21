/*
JOSEPH P. PASAOA
CellDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React, { memo } from 'react'


/* TYPING */
type Coordinates = [number, number];
interface Props {
  isCellAlive: boolean;
  boolRowIndex: number;
  boolColIndex: number;
}


/* COMPONENT */
const MemoizedCellDisplay = memo(
  function CellDisplay({ isCellAlive, boolRowIndex, boolColIndex }: Props) {
    return(
      <div
        className={`cell${isCellAlive ? ' alive' : ''}`}
        data-row={boolRowIndex}
        data-col={boolColIndex}
      ></div>
    );
  }
);


/* EXPORT */
export default MemoizedCellDisplay;
