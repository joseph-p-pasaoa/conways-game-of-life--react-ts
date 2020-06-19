/*
JOSEPH P. PASAOA
MatrixDisplay Component | Tribute to Conway's Game of Life
*/



/* IMPORT */
import React from 'react'



/* TYPING */
export interface Props {
  boolMatrix: boolean[][];
  handleClickCell(event: object): void;
}



/* COMPONENT */
const MatrixDisplay = ({ boolMatrix, handleClickCell }: Props) => {

  let showMatrix = boolMatrix.map((propRow, propRowIndex) => {
      const displayRow = propRow.map((isCellAlive, propColIndex) => {
          return(
            <div
              className={`cell${isCellAlive ? ' alive' : ''}`}
              data-row={propRowIndex}
              data-col={propColIndex}
              onClick={(e) => {
                  const targetRow = e.currentTarget.dataset.row;
                  const targetCol = e.currentTarget.dataset.col;
                  handleClickCell([ targetRow, targetCol ]);
              }}
              key={propRowIndex + propColIndex}
            ></div>
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
