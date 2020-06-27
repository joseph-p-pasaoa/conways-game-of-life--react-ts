/*
JOSEPH P. PASAOA
RowDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React, { memo } from 'react'

import CellDisplay from './CellDisplay';


/* TYPING */
type Coordinates = [number, number];
interface Props {
  boolRowIndex: number;
  boolRow: boolean[];
  reload: number; // prop reload passed here to trigger component reload on clicked cell
}


/* COMPONENT */
const MemoizedRowDisplay = memo(
  function RowDisplay({ boolRowIndex, boolRow }: Props) {
    const displayRow = boolRow.map((isCellAlive, boolColIndex) => {
        return(
          <CellDisplay
            key={boolRowIndex + boolColIndex}
            isCellAlive={isCellAlive}
            boolRowIndex={boolRowIndex}
            boolColIndex={boolColIndex}
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
