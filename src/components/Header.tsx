/*
JOSEPH P. PASAOA
Header Component | Tribute to Conway's Game of Life
*/


import React from 'react'


const Header = () => {
   return(
      <div className='header'>
         <h1 className='title'>Conway's Game of Life:</h1>
         <h2 className='title--sub'>A Tribute Implementation</h2>
         <a href='https://github.com/joseph-p-pasaoa' target='_blank' rel='noopener noreferrer'>
            <h3 className='developer'>Joseph P. Pasaoa, Developer</h3>
         </a>
      </div>
   );
}


export default Header;
