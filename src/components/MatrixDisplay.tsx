/*
JOSEPH P. PASAOA
MatrixDisplay Component | Tribute to Conway's Game of Life
*/


/* IMPORT */
import React from 'react';

import RowDisplay from './RowDisplay';


/* TYPING */
type Coordinates = [number, number];
type cellStates = ('noLife' | 'willDie' | 'willRise' | 'livesOn');
type BoolOrStateMatrix = (boolean | cellStates)[][];
interface Props {
  dataMatrix: BoolOrStateMatrix;
  handleClickCell(targetCoordinates: Coordinates): void;
  reload: number;  // reload passed down to trigger component reload on clicked cell
}
interface MatrixMouseEventTarget extends EventTarget {
  dataset: {
    row: string;
    col: string;
  }
}
interface MatrixMouseEvent extends React.MouseEvent<HTMLInputElement> {
  target: MatrixMouseEventTarget;
}


/* COMPONENT */
const MatrixDisplay = ({ dataMatrix, handleClickCell, reload }: Props) => {

  let showMatrix = dataMatrix.map((dataRow, dataRowIndex) => {
      return(
        <RowDisplay
          key={dataRowIndex}
          dataRowIndex={dataRowIndex}
          dataRow={dataRow}
          reload={reload}
        />
      );
  });


  return (
    <div
      className='matrix'
      onClick={(e: MatrixMouseEvent) => {
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
