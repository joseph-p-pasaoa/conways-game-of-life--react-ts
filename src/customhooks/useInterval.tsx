/*
JOSEPH P. PASAOA
useInterval Custom Hook | Tribute to Conway's Game of Life
*/


import { useEffect, useRef } from 'react';


const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback: any = useRef(null);  // DEV REPLACE TYPE

  // remembers the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // sets up the interval
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


export default useInterval;
