/*
JOSEPH P. PASAOA
RowDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React, { memo } from 'react'

import CellDisplay from './CellDisplay';



/* TYPING */
export interface Props {
  boolRowIndex: number;
  boolRow: boolean[];
  // handleClickCell(event: object): void;
}



/* COMPONENT */
const MemoizedRowDisplay = memo(
  function RowDisplay({ boolRowIndex, boolRow /*, handleClickCell */ }: Props) {
    const displayRow = boolRow.map((isCellAlive, boolColIndex) => {
        return(
          <CellDisplay
            key={boolRowIndex + boolColIndex}
            isCellAlive={isCellAlive}
            boolRowIndex={boolRowIndex}
            boolColIndex={boolColIndex}
            // handleClickCell={handleClickCell}
          />
        );
    })


    return(
      <div className='row'>
        {displayRow}
      </div>
    );
  }
);



/* EXPORT */
export default MemoizedRowDisplay;
