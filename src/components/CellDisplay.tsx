/*
JOSEPH P. PASAOA
CellDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React, { memo } from 'react'



/* TYPING */
export interface Props {
  isCellAlive: boolean;
  boolRowIndex: number;
  boolColIndex: number;
  // handleClickCell(event: object): void;
}



/* COMPONENT */
const MemoizedCellDisplay = memo(
  function CellDisplay({ isCellAlive, boolRowIndex, boolColIndex /*, handleClickCell */ }: Props) {
    return(
      <div
        className={`cell${isCellAlive ? ' alive' : ''}`}
        data-row={boolRowIndex}
        data-col={boolColIndex}
        onClick={(e) => {
            const targetRow = e.currentTarget.dataset.row;
            const targetCol = e.currentTarget.dataset.col;
            // handleClickCell([ targetRow, targetCol ]);
        }}
      ></div>
    );
  }
);



/* EXPORT */
export default MemoizedCellDisplay;
