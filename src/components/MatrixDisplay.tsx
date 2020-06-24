/*
JOSEPH P. PASAOA
MatrixDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React from 'react';

import RowDisplay from './RowDisplay';


/* TYPING */
type Coordinates = [number, number];
interface Props {
  boolMatrix: boolean[][];
  handleClickCell(targetCoordinates: Coordinates): void;
  reload: number;  // reload passed down to trigger component reload on clicked cell
}
// interface CellClickData<T> extends HTMLAttributes<T> {
//   row: string;
//   col: string;
// }
// interface MatrixClickEventTarget extends EventTarget {
//   dataset: CellClickData;
// }
// interface MatrixMouseEvent extends React.MouseEvent<HTMLElement> {
//   target: MatrixClickEventTarget;
// }


/* COMPONENT */
const MatrixDisplay = ({ boolMatrix, handleClickCell, reload }: Props) => {

  let showMatrix = boolMatrix.map((boolRow, boolRowIndex) => {
      return(
        <RowDisplay
          key={boolRowIndex}
          boolRowIndex={boolRowIndex}
          boolRow={boolRow}
          reload={reload}
        />
      );
  });


  return (
    <div
      className='matrix'
      onClick={(e: any) => {                                      // DEV: figure out type
          const targetRow = parseInt(e.target.dataset.row);
          const targetCol = parseInt(e.target.dataset.col);
          if (!isNaN(targetRow) && !isNaN(targetCol)) {
            handleClickCell([ targetRow, targetCol ]);
          }
      }}
    >
      {showMatrix}
    </div>
  )
}


/* EXPORT */
export default MatrixDisplay;
