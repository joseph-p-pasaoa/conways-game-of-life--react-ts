/*
JOSEPH P. PASAOA
MatrixDisplay Component | Tribute to Conway's Game of Life
*/


import React from 'react'

export interface Props {
  boolMatrix: boolean[][];
}


const MatrixDisplay = ({ boolMatrix }: Props) => {

  let showMatrix = boolMatrix.map((propRow, propRowIndex) => {
      const displayRow = propRow.map((isCellAlive, propCellIndex) => {
          return(
            <div className={`cell ${isCellAlive ? 'alive' : ''}`} key={propRowIndex + propCellIndex}></div>
          );
      })
      return(
        <div className='row' key={propRowIndex}>
          {displayRow}
        </div>
      );
  });


  return (
    <div className='matrix'>
      {showMatrix}
    </div>
  )
}


export default MatrixDisplay;
