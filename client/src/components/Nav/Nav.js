import React, { useState, useEffect } from 'react';

import './Nav.css';


function Nav() {
  // const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 40) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener('scroll');
  //   }
  // }, []);
  // className={`nav__container ${show && 'nav__black'}`}
  return (
    <nav className='nav__container'>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <ul className="ul__container">
        <li>LINK1</li>
        <li>LINK2</li>
        <li>LINK3</li>
        <li>LINK4</li>
      </ul>
    </nav>
  )
}

export default Nav
