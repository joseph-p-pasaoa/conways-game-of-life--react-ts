/*
JOSEPH P. PASAOA
CellDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React, { memo } from 'react'


/* TYPING */
type cellStates = ('noLife' | 'willDie' | 'willRise' | 'livesOn');
type BoolOrState = (boolean | cellStates);
interface Props {
  cellBoolOrState: BoolOrState;
  dataRowIndex: number;
  dataColIndex: number;
}


/* COMPONENT */
const MemoizedCellDisplay = memo(
  function CellDisplay({ cellBoolOrState, dataRowIndex, dataColIndex }: Props) {
    let cellDivClass: '' | 'alive' | cellStates = '';
    if (cellBoolOrState === true) cellDivClass = 'alive';
    else if (cellBoolOrState !== false) cellDivClass = cellBoolOrState;


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
