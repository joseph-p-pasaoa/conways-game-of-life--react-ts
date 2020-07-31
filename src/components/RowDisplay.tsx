/*
JOSEPH P. PASAOA
RowDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React, { memo } from 'react'

import CellDisplay from './CellDisplay';


/* TYPING */
interface Props {
   dataRowIndex: number;
   dataRow: boolean[];
   reload: number; // prop reload passed here to trigger component reload on clicked cell
}


/* COMPONENT */
const MemoizedRowDisplay = memo(
   function RowDisplay({ dataRowIndex, dataRow }: Props) {
      const displayRow = dataRow.map((cellStatus, dataColIndex) => {
            return(
               <CellDisplay
                  key={dataRowIndex + dataColIndex}
                  cellStatus={cellStatus}
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
