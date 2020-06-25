/*
JOSEPH P. PASAOA
Description Component | Tribute to Conway's Game of Life
*/


import React from 'react'


const Description = () => {
  return(
    <div className='description'>
      <p>
        Except for those on the edges, every cell in the grid has eight (8) neighboring cells.<br />
        Dead cells come to life in the following generation if they have 3 living neighbors, from reproduction.<br />
        Living cells with more than 3 living neighbors die in the next generation from overcrowding,
        fewer than 2 neighbors die from underpopulation, and the rest live on.
      </p>
      <p>
        Click on any cell directly to toggle its status, or, use the controls below to play.
      </p>
    </div>
  );
}


export default Description;
