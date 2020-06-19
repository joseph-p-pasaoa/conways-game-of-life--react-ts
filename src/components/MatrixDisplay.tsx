/*
JOSEPH P. PASAOA
MatrixDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'

import RowDisplay from './RowDisplay';



/* TYPING */
export interface Props {
  boolMatrix: boolean[][];
  handleClickCell(event: object): void;
}



/* COMPONENT */
const MatrixDisplay = ({ boolMatrix, handleClickCell }: Props) => {

  let showMatrix = boolMatrix.map((boolRow, boolRowIndex) => {
      return(
        <RowDisplay
          key={boolRowIndex}
          boolRowIndex={boolRowIndex}
          boolRow={boolRow}
          handleClickCell={handleClickCell}
        />
      );
  });


  return (
    <div className='matrix'>
      {showMatrix}
    </div>
  )
}


export default MatrixDisplay;
