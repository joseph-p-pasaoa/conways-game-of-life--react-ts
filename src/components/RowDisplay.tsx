/*
JOSEPH P. PASAOA
RowDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React, { memo } from 'react'

import CellDisplay from './CellDisplay';


/* TYPING */
type Coordinates = [number, number];
type cellStates = ('noLife' | 'willDie' | 'willRise' | 'livesOn');
type BoolOrState = (boolean | cellStates);
interface Props {
  dataRowIndex: number;
  dataRow: BoolOrState[];
  reload: number; // prop reload passed here to trigger component reload on clicked cell
}


/* COMPONENT */
const MemoizedRowDisplay = memo(
  function RowDisplay({ dataRowIndex, dataRow }: Props) {
    const displayRow = dataRow.map((cellBoolOrState, dataColIndex) => {
        return(
          <CellDisplay
            key={dataRowIndex + dataColIndex}
            cellBoolOrState={cellBoolOrState}
            dataRowIndex={dataRowIndex}
            dataColIndex={dataColIndex}
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
