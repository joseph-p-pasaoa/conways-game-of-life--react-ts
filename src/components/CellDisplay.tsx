/*
JOSEPH P. PASAOA
CellDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React, { memo } from 'react'


/* TYPING */
type cellStatuses = 'falseFalse' | 'falseTrue' | 'trueFalse' | 'trueTrue';
type BoolOrStatus = (boolean | cellStatuses);
interface Props {
  cellBoolOrStatus: BoolOrStatus;
  dataRowIndex: number;
  dataColIndex: number;
}


/* COMPONENT */
const MemoizedCellDisplay = memo(
  function CellDisplay({ cellBoolOrStatus, dataRowIndex, dataColIndex }: Props) {
    let cellDivClass: '' | 'alive' | cellStatuses = '';
    if (cellBoolOrStatus === true) cellDivClass = 'alive';
    else if (cellBoolOrStatus !== false) cellDivClass = cellBoolOrStatus;


    return(
      <div
        className={`cell ${cellDivClass}`}
        data-row={dataRowIndex}
        data-col={dataColIndex}
      ></div>
    );
  }
);


/* EXPORT */
export default MemoizedCellDisplay;
