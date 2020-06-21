/*
JOSEPH P. PASAOA
MatrixDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'

import RowDisplay from './RowDisplay';



/* TYPING */
type Coordinates = [number, number];
interface Props {
  boolMatrix: boolean[][];
  handleClickCell(targetCoordinates: Coordinates): void;
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
