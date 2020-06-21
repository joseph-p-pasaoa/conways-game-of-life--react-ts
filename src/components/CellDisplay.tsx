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
  handleClickCell(targetCoordinates: Coordinates): void;
}



/* COMPONENT */
const MemoizedCellDisplay = memo(
  function CellDisplay({ isCellAlive, boolRowIndex, boolColIndex, handleClickCell }: Props) {
    return(
      <div
        className={`cell${isCellAlive ? ' alive' : ''}`}
        data-row={boolRowIndex}
        data-col={boolColIndex}
        onClick={(e: any) => {                                      // DEV: figure out type
            const targetRow = parseInt(e.currentTarget.dataset.row);
            const targetCol = parseInt(e.currentTarget.dataset.col);
            handleClickCell([ targetRow, targetCol ]);
        }}
      ></div>
    );
  }
);



/* EXPORT */
export default MemoizedCellDisplay;
