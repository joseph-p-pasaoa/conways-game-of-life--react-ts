/*
JOSEPH P. PASAOA
CellDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React, { memo } from 'react'


/* TYPING */
interface Props {
   cellStatus: boolean;
   dataRowIndex: number;
   dataColIndex: number;
}


/* COMPONENT */
const MemoizedCellDisplay = memo(
   function CellDisplay({ cellStatus, dataRowIndex, dataColIndex }: Props) {
      return(
         <div
            className={`cell${cellStatus ? ' alive' : ''}`}
            data-row={dataRowIndex}
            data-col={dataColIndex}
         ></div>
      );
   }
);


/* EXPORT */
export default MemoizedCellDisplay;
