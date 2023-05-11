import React, { useEffect }  from 'react';
import './ScrollUp.css';
import { Link } from "react-scroll";
function ScrollUp() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
   <div class="scrollUp">
        <Link activeClass="active" smooth spy to="home">
        <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="4em"
      width="5vw"
    >
      <path
        fillRule="evenodd"
        d="M8 10a.5.5 0 00.5-.5V3.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 3.707V9.5a.5.5 0 00.5.5zm-7 2.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
      />
    </svg>
        </Link>
   </div>
  );
}

export default ScrollUp;